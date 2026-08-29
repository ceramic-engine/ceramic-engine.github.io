---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WebAssembly
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/WebAssembly/
---

# WebAssembly

<div class="type-hierarchy"><strong>js.lib.WebAssembly</strong> (extern class)</div>

The WebAssembly JavaScript object acts as the namespace for all WebAssembly-related functionality.

Documentation [WebAssembly](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Static Members

<div class="signature field-method has-description" id="instantiate"><code><span class="field-name">instantiate</span><span class="parenthesis">(</span><span class="arg-name">bufferSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/BufferSource/" class="type-link">BufferSource</a><span class="operator">,</span> <span class="arg-name">importObject</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/WebAssemblyInstantiatedSource/" class="type-link">WebAssemblyInstantiatedSource</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instantiate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `WebAssembly.instantiate()` function allows you to compile and instantiate WebAssembly code.
This function has two overloads:

- The primary overload takes the WebAssembly binary code, in the form of a typed array or ArrayBuffer,
and performs both compilation and instantiation in one step. The returned Promise resolves to both
a compiled WebAssembly.Module and its first WebAssembly.Instance.

- The secondary overload takes an already-compiled WebAssembly.Module and returns a Promise that resolves
to an Instance of that Module. This overload is useful if the Module has already been compiled.

| Name | Type |
|------|------|
| `bufferSource` | [BufferSource](/api-docs/clay-web/js/lib/BufferSource/) |
| `importObject` | AnonStruct |

| Returns |
|---------|
| [Promise](/api-docs/clay-web/js/lib/Promise/)<[WebAssemblyInstantiatedSource](/api-docs/clay-web/js/lib/WebAssemblyInstantiatedSource/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="instantiateStreaming"><code><span class="field-name">instantiateStreaming</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Response/" class="type-link">js.html.Response</a><span class="operator">,</span> <span class="arg-name">importObject</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/WebAssemblyInstantiatedSource/" class="type-link">WebAssemblyInstantiatedSource</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instantiateStreaming"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `WebAssembly.instantiateStreaming()` function compiles and instantiates a WebAssembly module
directly from a streamed underlying source. This is the most efficient, optimized way to load wasm code.

| Name | Type |
|------|------|
| `source` | [js.html.Response](/api-docs/clay-web/js/html/Response/) |
| `importObject` | AnonStruct |

| Returns |
|---------|
| [Promise](/api-docs/clay-web/js/lib/Promise/)<[WebAssemblyInstantiatedSource](/api-docs/clay-web/js/lib/WebAssemblyInstantiatedSource/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compile"><code><span class="field-name">compile</span><span class="parenthesis">(</span><span class="arg-name">bufferSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/BufferSource/" class="type-link">BufferSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/webassembly/Module/" class="type-link">js.lib.webassembly.Module</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#compile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `WebAssembly.compile()` function compiles a WebAssembly `Module` from WebAssembly binary code.
This function is useful if it is necessary to a compile a module before it can be instantiated
(otherwise, the `WebAssembly.instantiate()` function should be used).

| Name | Type |
|------|------|
| `bufferSource` | [BufferSource](/api-docs/clay-web/js/lib/BufferSource/) |

| Returns |
|---------|
| [Promise](/api-docs/clay-web/js/lib/Promise/)<[js.lib.webassembly.Module](/api-docs/clay-web/js/lib/webassembly/Module/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compileStreaming"><code><span class="field-name">compileStreaming</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Response/" class="type-link">js.html.Response</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/webassembly/Module/" class="type-link">js.lib.webassembly.Module</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#compileStreaming"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `WebAssembly.compileStreaming()` function compiles a WebAssembly `Module` directly from a streamed
underlying source. This function is useful if it is necessary to a compile a module before it can
be instantiated (otherwise, the `WebAssembly.instantiateStreaming()` function should be used).

| Name | Type |
|------|------|
| `source` | [js.html.Response](/api-docs/clay-web/js/html/Response/) |

| Returns |
|---------|
| [Promise](/api-docs/clay-web/js/lib/Promise/)<[js.lib.webassembly.Module](/api-docs/clay-web/js/lib/webassembly/Module/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="validate"><code><span class="field-name">validate</span><span class="parenthesis">(</span><span class="arg-name">bufferSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/BufferSource/" class="type-link">BufferSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#validate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `WebAssembly.validate()` function validates a given typed array of WebAssembly binary code,
returning whether the bytes form a valid wasm module (`true`) or not (`false`).

| Name | Type |
|------|------|
| `bufferSource` | [BufferSource](/api-docs/clay-web/js/lib/BufferSource/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |


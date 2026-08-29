---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Instance
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/webassembly/Instance/
---

# Instance

<div class="type-hierarchy"><strong>js.lib.webassembly.Instance</strong> (extern class)</div>

A WebAssembly `Instance` object is a stateful, executable instance of a WebAssembly `Module`.
Instance objects contain all the [Exported WebAssembly functions](https://developer.mozilla.org/en-US/docs/WebAssembly/Exported_functions)
that allow calling into WebAssembly code from JavaScript.

Documentation [Instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Instance Members

<div class="signature field-var has-description" id="exports"><code><span class="field-name">exports</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#exports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an object containing as its members all the functions exported from
the WebAssembly module instance, to allow them to be accessed and used by JavaScript.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/webassembly/Module/" class="type-link">Module</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">importObject</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `module` | [Module](/api-docs/clay-web/js/lib/webassembly/Module/) | |
| `importObject` | AnonStruct | *(optional)* |


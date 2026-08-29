---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Module
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/webassembly/Module/
---

# Module

<div class="type-hierarchy"><strong>js.lib.webassembly.Module</strong> (extern class)</div>

A WebAssembly `Module` object contains stateless WebAssembly code that has already
been compiled by the browser and can be efficiently [shared with Workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage),
and instantiated multiple times. To instantiate the module, call
[the secondary overload of `WebAssembly.instantiate()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Secondary_overload_%E2%80%94_taking_a_module_object_instance).

Documentation [Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Static Members

<div class="signature field-method has-description" id="customSections"><code><span class="field-name">customSections</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="#" class="type-link">Module</a><span class="operator">,</span> <span class="arg-name">sectionName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customSections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given a `Module` and string, returns a copy of the contents of all custom sections
in the module with the given string name.

| Name | Type |
|------|------|
| `module` | [Module](/api-docs/clay-web/js/lib/webassembly/Module/) |
| `sectionName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exports"><code><span class="field-name">exports</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="#" class="type-link">Module</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/webassembly/ModuleExportDescriptor/" class="type-link">ModuleExportDescriptor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given a `Module`, returns an array containing descriptions of all the declared exports.

| Name | Type |
|------|------|
| `module` | [Module](/api-docs/clay-web/js/lib/webassembly/Module/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[ModuleExportDescriptor](/api-docs/clay-web/js/lib/webassembly/ModuleExportDescriptor/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="imports"><code><span class="field-name">imports</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="#" class="type-link">Module</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/webassembly/ModuleImportDescriptor/" class="type-link">ModuleImportDescriptor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#imports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given a `Module`, returns an array containing descriptions of all the declared imports.

| Name | Type |
|------|------|
| `module` | [Module](/api-docs/clay-web/js/lib/webassembly/Module/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[ModuleImportDescriptor](/api-docs/clay-web/js/lib/webassembly/ModuleImportDescriptor/)> |

## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">bufferSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/BufferSource/" class="type-link">js.lib.BufferSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bufferSource` | [js.lib.BufferSource](/api-docs/clay-web/js/lib/BufferSource/) |


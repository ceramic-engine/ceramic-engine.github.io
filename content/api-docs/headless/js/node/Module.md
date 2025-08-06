---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Module
target: Headless
permalink: api-docs/headless/js/node/Module/
---

# Module

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Module.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Module</strong> (extern class)</div>

In each module, the `module` free variable is a reference to the object representing the current module.
For convenience, `module.exports` is also accessible via the `exports` module-global.
`module` is not actually a global but rather local to each module.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_the_module_object</div>


## Static Members

<div class="signature field-var has-description" id="builtinModules"><code><span class="field-name">builtinModules</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#builtinModules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A list of the names of all modules provided by Node.js.
Can be used to verify if a module is maintained by a third party or not.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_builtinmodules</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="createRequire"><code><span class="field-name">createRequire</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#createRequire"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_createrequire_filename</div>


| Name | Type |
|------|------|
| `filename` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="syncBuiltinESMExports"><code><span class="field-name">syncBuiltinESMExports</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#syncBuiltinESMExports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `module.syncBuiltinESMExports()` method updates all the live bindings for builtin ES Modules to match the
properties of the CommonJS exports.
It does not add or remove exported names from the ES Modules.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_syncbuiltinesmexports</div>


## Instance Members

<div class="signature field-var has-description" id="children"><code><span class="field-name">children</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Module</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#children"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The module objects required for the first time by this one.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_children</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="exports"><code><span class="field-name">exports</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#exports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `module.exports` object is created by the Module system.
Sometimes this is not acceptable; many want their module to be an instance of some class.
To do this, assign the desired export object to `module.exports`.
Assigning the desired object to `exports` will simply rebind the local `exports` variable, which is probably not
what is desired.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_exports</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="filename"><code><span class="field-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#filename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The fully resolved filename of the module.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_filename</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The identifier for the module.
Typically this is the fully resolved filename.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_id</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="loaded"><code><span class="field-name">loaded</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether or not the module is done loading, or is in the process of loading.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_loaded</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="parent"><code><span class="field-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">Module</a></code><a class="header-anchor" href="#parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The module that first required this one.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_parent</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="paths"><code><span class="field-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#paths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The search paths for the module.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_paths</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="require"><code><span class="field-name">require</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#require"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `module.require()` method provides a way to load a module as if `require()` was called from the original
module.

<div class="see"><strong>See:</strong> https://nodejs.org/api/modules.html#modules_module_require_id</div>


| Name | Type |
|------|------|
| `id` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "module" |


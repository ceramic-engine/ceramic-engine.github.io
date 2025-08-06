---
layout: api-docs
category: api-docs
subCategory: doc
menu: Script
title: Interp
target: Unity
permalink: api-docs/unity/ceramic/Interp/
---

# Interp

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/script/runtime/src/ceramic/Script.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/hscript/Interp/">hscript.Interp</a> → <strong>ceramic.Interp</strong> (Class)</div>

Custom HScript interpreter with Ceramic-specific functionality.

Extends the base interpreter to:
- Support ScriptModule method calls
- Automatically destroy entities created by scripts
- Catch and handle runtime errors gracefully

## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">script</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new interpreter for the given script.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Script](/api-docs/unity/ceramic/Script/) | Script that owns this interpreter |

## Private Members

<div class="signature field-var has-description has-plugin" id="owner"><div class="plugin-name">script</div><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Script instance that owns this interpreter

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fcall"><div class="plugin-name">script</div><code><span class="field-name">fcall</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#fcall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles function calls on objects.
Special handling for ScriptModule to enable inter-script calls.



| Name | Type | Description |
|------|------|-------------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) | Object to call method on  |
| `f` | [String](/api-docs/unity/String/) | Function name  |
| `args` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> | Function arguments  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Function result |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">script</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a field value from an object.
Special handling for ScriptModule to access exported variables.



| Name | Type | Description |
|------|------|-------------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) | Object to get field from  |
| `f` | [String](/api-docs/unity/String/) | Field name  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Field value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cnew"><div class="plugin-name">script</div><code><span class="field-name">cnew</span><span class="parenthesis">(</span><span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#cnew"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new instance of a class.

Entities created by scripts are automatically destroyed when
the script is destroyed, preventing memory leaks.



| Name | Type | Description |
|------|------|-------------|
| `cl` | [String](/api-docs/unity/String/) | Class name  |
| `args` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> | Constructor arguments  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | New instance |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="exprReturn"><div class="plugin-name">script</div><code><span class="field-name">exprReturn</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/hscript/Expr/" class="type-link">hscript.Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#exprReturn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes a return expression with error handling.

Catches runtime errors to prevent scripts from crashing the application.
Failed scripts are marked as broken and destroyed.



| Name | Type | Description |
|------|------|-------------|
| `e` | [hscript.Expr](/api-docs/unity/hscript/Expr/) | Expression to evaluate  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Expression result or null if error |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: InterpreterOptions
target: Unity
permalink: api-docs/unity/loreline/InterpreterOptions/
---

# InterpreterOptions

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.InterpreterOptions</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="functions"><code><span class="field-name">functions</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/FunctionsMap/" class="type-link">FunctionsMap</a></code><a class="header-anchor" href="#functions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional map of additional functions to make available to the script

<hr class="field-separator" />

<div class="signature field-var has-description" id="strictAccess"><code><span class="field-name">strictAccess</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strictAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells whether access is strict or not. If set to true,
trying to read or write an undefined variable will throw an error.

<hr class="field-separator" />

<div class="signature field-method has-description" id="customCreateFields"><code><span class="field-name">customCreateFields</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#customCreateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A custom instanciator to create fields objects.

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `type` | [String](/api-docs/unity/String/) |
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">functions</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/FunctionsMap/" class="type-link">FunctionsMap</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">strictAccess</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">customCreateFields</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `functions` | [Null](/api-docs/unity/Null/)<[FunctionsMap](/api-docs/unity/loreline/FunctionsMap/)> | * Optional map of additional functions to make available to the script |
| `strictAccess` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | * Tells whether access is strict or not. If set to true, trying to read or write an undefined variable will throw an error. |
| `customCreateFields` | [Null](/api-docs/unity/Null/)<Function> | * A custom instanciator to create fields objects. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |


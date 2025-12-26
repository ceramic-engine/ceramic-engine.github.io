---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeState
target: Clay (Web)
permalink: api-docs/clay-web/loreline/RuntimeState/
---

# RuntimeState

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.RuntimeState</strong> (Class) → <a href="/api-docs/clay-web/loreline/RuntimeCharacter/">RuntimeCharacter</a></div>

A state during the runtime execution of a loreline script.
States hold field values that can be accessed and modified during script execution.

## Instance Members

<div class="signature field-var has-description" id="scope"><code><span class="field-name">scope</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to a value > 0, this state is temporary and linked to a scope.
Every time we enter a new block node, we enter a new scope identified by a unique integer value.
When exiting that scope, the related temporary states are destroyed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fields"><code><span class="field-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#fields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fields of this state. Contains the actual data being stored.

<hr class="field-separator" />

<div class="signature field-var has-description" id="originalFields"><code><span class="field-name">originalFields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#originalFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original field values, as they are initially declared in the script,
as long as they are not dependent on other state values.
Used for comparison when serializing to avoid storing unchanged values.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears all fields in this state.

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-web/loreline/Interpreter/) |
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">originalFields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new runtime state with optional initial field values.



| Name | Type | Description |
|------|------|-------------|
| `interpreter` | [Interpreter](/api-docs/clay-web/loreline/Interpreter/) |  |
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |  |
| `fields` | [Any](/api-docs/clay-web/Any/) | Initial field values, or null to create empty fields  |
| `originalFields` | [Any](/api-docs/clay-web/Any/) | Original field values for comparison, or null to create empty original fields |

## Private Members

<div class="signature field-method has-description" id="createOriginalFields"><code><span class="field-name">createOriginalFields</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createOriginalFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates empty original fields.


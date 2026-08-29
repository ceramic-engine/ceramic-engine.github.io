---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NBeatCall
target: Clay (Web)
permalink: api-docs/clay-web/loreline/NBeatCall/
---

# NBeatCall

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/loreline/Node/">Node</a> → <a href="/api-docs/clay-web/loreline/AstNode/">AstNode</a> → <strong>loreline.NBeatCall</strong> (Class)</div>

Represents a dynamic beat call statement: `beat(expr, args...)`.
Runs the resolved beat as a stack-preserving call (like a static
`SomeBeat(args...)` call), with the target resolved at runtime.

## Instance Members

<div class="signature field-var has-description" id="targetExpr"><code><span class="field-name">targetExpr</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#targetExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target expression, resolved at runtime to a beat
(a string name, a beat value or a beat reference).

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetPos"><code><span class="field-name">targetPos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#targetPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the `beat(...)` target part.

<hr class="field-separator" />

<div class="signature field-var has-description" id="args"><code><span class="field-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#args"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional arguments passed to the target beat.

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="each"><code><span class="field-name">each</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#each"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the beat call to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Dynamic object containing beat call data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">targetExpr</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">targetPos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new dynamic beat call node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/clay-web/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) | | Position in source where this call appears  |
| `targetExpr` | [NExpr](/api-docs/clay-web/loreline/NExpr/) | | Expression resolving to the target beat  |
| `targetPos` | [Position](/api-docs/clay-web/loreline/Position/) | | Position of the target part  |
| `leadingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional comments before the call  |
| `trailingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional comments after the call |


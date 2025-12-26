---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NFunctionDecl
target: Unity
permalink: api-docs/unity/loreline/NFunctionDecl/
---

# NFunctionDecl

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/loreline/Node/">Node</a> → <a href="/api-docs/unity/loreline/AstNode/">AstNode</a> → <a href="/api-docs/unity/loreline/NExpr/">NExpr</a> → <strong>loreline.NFunctionDecl</strong> (Class)</div>

Represents a callable function in the AST

## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The function name (if any)

<hr class="field-separator" />

<div class="signature field-var has-description" id="args"><code><span class="field-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#args"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Argument names

<hr class="field-separator" />

<div class="signature field-var has-description" id="code"><code><span class="field-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual code of the function (including the signature)

<hr class="field-separator" />

<div class="signature field-var has-description" id="external"><code><span class="field-name">external</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#external"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this is an external function (so this is only a declaration without implementation)

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the literal to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Dynamic object containing literal data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">external</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new function node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/unity/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/unity/loreline/Position/) | | Position in source where this function appears  |
| `name` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | | The function name (if any)  |
| `args` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | | Argument names  |
| `code` | [String](/api-docs/unity/String/) | | The actual code of the function (including the signature)  |
| `external` | [Bool](/api-docs/unity/Bool/) | | Whether this is an external function (so this is only a declaration without implementation)  |
| `leadingComments` | [Array](/api-docs/unity/Array/)<[Comment](/api-docs/unity/loreline/Comment/)> | *(optional)* | Optional comments before the function  |
| `trailingComments` | [Array](/api-docs/unity/Array/)<[Comment](/api-docs/unity/loreline/Comment/)> | *(optional)* | Optional comments after the function |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


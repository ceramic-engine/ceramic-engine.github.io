---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: AstNode
target: Clay (Web)
permalink: api-docs/clay-web/loreline/AstNode/
---

# AstNode

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/loreline/Node/">Node</a> → <strong>loreline.AstNode</strong> (Class) → <a href="/api-docs/clay-web/loreline/NBeatDecl/">NBeatDecl</a>, <a href="/api-docs/clay-web/loreline/NBlock/">NBlock</a>, <a href="/api-docs/clay-web/loreline/NCharacterDecl/">NCharacterDecl</a>, <a href="/api-docs/clay-web/loreline/NChoiceOption/">NChoiceOption</a>, <a href="/api-docs/clay-web/loreline/NChoiceStatement/">NChoiceStatement</a>, <a href="/api-docs/clay-web/loreline/NDialogueStatement/">NDialogueStatement</a>, <a href="/api-docs/clay-web/loreline/NExpr/">NExpr</a>, <a href="/api-docs/clay-web/loreline/NIfStatement/">NIfStatement</a>, <a href="/api-docs/clay-web/loreline/NImportStatement/">NImportStatement</a>, <a href="/api-docs/clay-web/loreline/NInsertion/">NInsertion</a>, <a href="/api-docs/clay-web/loreline/NObjectField/">NObjectField</a>, <a href="/api-docs/clay-web/loreline/NStateDecl/">NStateDecl</a>, <a href="/api-docs/clay-web/loreline/NTextStatement/">NTextStatement</a>, <a href="/api-docs/clay-web/loreline/NTransition/">NTransition</a>, <a href="/api-docs/clay-web/loreline/Script/">Script</a></div>

Base class for AST nodes that can have associated comments.
Extends Node with support for leading and trailing comments.

## Instance Members

<div class="signature field-var has-description" id="leadingComments"><code><span class="field-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#leadingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comments that appear before this node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="trailingComments"><code><span class="field-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#trailingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comments that appear after this node.

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="eachComment"><code><span class="field-name">eachComment</span><span class="parenthesis">(</span><span class="arg-name">handleComment</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#eachComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleComment` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="each"><code><span class="field-name">each</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#each"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the node and its comments to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Dynamic object containing node data and associated comments |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new node that supports comments.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/clay-web/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) | | Position in source where this node appears  |
| `leadingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional array of comments appearing before the node  |
| `trailingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional array of comments appearing after the node |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NIfStatement
target: Clay (Web)
permalink: api-docs/clay-web/loreline/NIfStatement/
---

# NIfStatement

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/loreline/Node/">Node</a> → <a href="/api-docs/clay-web/loreline/AstNode/">AstNode</a> → <strong>loreline.NIfStatement</strong> (Class)</div>

Represents an if statement in the AST, with optional else branch.

## Instance Members

<div class="signature field-var has-description" id="condition"><code><span class="field-name">condition</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#condition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The condition to evaluate.

<hr class="field-separator" />

<div class="signature field-var has-description" id="conditionStyle"><code><span class="field-name">conditionStyle</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ConditionStyle/" class="type-link">ConditionStyle</a></code><a class="header-anchor" href="#conditionStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The style of the condition (plain or parentheses).

<hr class="field-separator" />

<div class="signature field-var has-description" id="thenBranch"><code><span class="field-name">thenBranch</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBlock/" class="type-link">NBlock</a></code><a class="header-anchor" href="#thenBranch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of nodes to execute if condition is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="elseBranch"><code><span class="field-name">elseBranch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBlock/" class="type-link">NBlock</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#elseBranch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional array of nodes to execute if condition is false.

<hr class="field-separator" />

<div class="signature field-var has-description" id="elseLeadingComments"><code><span class="field-name">elseLeadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#elseLeadingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comments that appear before the else keyword.

<hr class="field-separator" />

<div class="signature field-var has-description" id="elseTrailingComments"><code><span class="field-name">elseTrailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#elseTrailingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comments that appear after the else keyword.

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

Converts the if statement to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Dynamic object containing if statement data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">condition</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">conditionStyle</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ConditionStyle/" class="type-link">ConditionStyle</a><span class="operator">,</span> <span class="arg-name">thenBranch</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBlock/" class="type-link">NBlock</a><span class="operator">,</span> <span class="arg-name">elseBranch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBlock/" class="type-link">NBlock</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">elseLeadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">elseTrailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new if statement node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/clay-web/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) | | Position in source where this if statement appears  |
| `condition` | [NExpr](/api-docs/clay-web/loreline/NExpr/) | | Expression to evaluate  |
| `conditionStyle` | [ConditionStyle](/api-docs/clay-web/loreline/ConditionStyle/) | | The style of the condition (plain or parentheses)  |
| `thenBranch` | [NBlock](/api-docs/clay-web/loreline/NBlock/) | | Nodes to execute if condition is true  |
| `elseBranch` | [Null](/api-docs/clay-web/Null/)<[NBlock](/api-docs/clay-web/loreline/NBlock/)> | | Optional nodes to execute if condition is false  |
| `leadingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional comments before the if  |
| `trailingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional comments after the if  |
| `elseLeadingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional comments before the else  |
| `elseTrailingComments` | [Array](/api-docs/clay-web/Array/)<[Comment](/api-docs/clay-web/loreline/Comment/)> | *(optional)* | Optional comments after the else |


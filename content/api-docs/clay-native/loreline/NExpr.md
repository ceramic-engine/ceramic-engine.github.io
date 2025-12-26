---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NExpr
target: Clay (Native)
permalink: api-docs/clay-native/loreline/NExpr/
---

# NExpr

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/loreline/Node/">Node</a> → <a href="/api-docs/clay-native/loreline/AstNode/">AstNode</a> → <strong>loreline.NExpr</strong> (Class) → <a href="/api-docs/clay-native/loreline/NAccess/">NAccess</a>, <a href="/api-docs/clay-native/loreline/NArrayAccess/">NArrayAccess</a>, <a href="/api-docs/clay-native/loreline/NAssign/">NAssign</a>, <a href="/api-docs/clay-native/loreline/NBinary/">NBinary</a>, <a href="/api-docs/clay-native/loreline/NCall/">NCall</a>, <a href="/api-docs/clay-native/loreline/NFunctionDecl/">NFunctionDecl</a>, <a href="/api-docs/clay-native/loreline/NLiteral/">NLiteral</a>, <a href="/api-docs/clay-native/loreline/NStringLiteral/">NStringLiteral</a>, <a href="/api-docs/clay-native/loreline/NStringPart/">NStringPart</a>, <a href="/api-docs/clay-native/loreline/NUnary/">NUnary</a></div>

Base class for all expression nodes in the AST.

## Instance Members

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the expression node to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-native/Dynamic/) | Dynamic object containing expression data |

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `id` | [NodeId](/api-docs/clay-native/loreline/NodeId/) | |
| `pos` | [Position](/api-docs/clay-native/loreline/Position/) | |
| `leadingComments` | [Array](/api-docs/clay-native/Array/)<[Comment](/api-docs/clay-native/loreline/Comment/)> | *(optional)* |
| `trailingComments` | [Array](/api-docs/clay-native/Array/)<[Comment](/api-docs/clay-native/loreline/Comment/)> | *(optional)* |


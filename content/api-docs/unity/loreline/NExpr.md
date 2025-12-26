---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NExpr
target: Unity
permalink: api-docs/unity/loreline/NExpr/
---

# NExpr

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/loreline/Node/">Node</a> → <a href="/api-docs/unity/loreline/AstNode/">AstNode</a> → <strong>loreline.NExpr</strong> (Class) → <a href="/api-docs/unity/loreline/NAccess/">NAccess</a>, <a href="/api-docs/unity/loreline/NArrayAccess/">NArrayAccess</a>, <a href="/api-docs/unity/loreline/NAssign/">NAssign</a>, <a href="/api-docs/unity/loreline/NBinary/">NBinary</a>, <a href="/api-docs/unity/loreline/NCall/">NCall</a>, <a href="/api-docs/unity/loreline/NFunctionDecl/">NFunctionDecl</a>, <a href="/api-docs/unity/loreline/NLiteral/">NLiteral</a>, <a href="/api-docs/unity/loreline/NStringLiteral/">NStringLiteral</a>, <a href="/api-docs/unity/loreline/NStringPart/">NStringPart</a>, <a href="/api-docs/unity/loreline/NUnary/">NUnary</a></div>

Base class for all expression nodes in the AST.

## Instance Members

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the expression node to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Dynamic object containing expression data |

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


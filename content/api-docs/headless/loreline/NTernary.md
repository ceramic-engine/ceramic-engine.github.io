---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NTernary
target: Headless
permalink: api-docs/headless/loreline/NTernary/
---

# NTernary

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/loreline/Node/">Node</a> → <a href="/api-docs/headless/loreline/AstNode/">AstNode</a> → <a href="/api-docs/headless/loreline/NExpr/">NExpr</a> → <strong>loreline.NTernary</strong> (Class)</div>

Represents a ternary conditional expression (condition ? trueExpr : falseExpr).

## Instance Members

<div class="signature field-var has-description" id="condition"><code><span class="field-name">condition</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#condition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The condition expression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="trueExpr"><code><span class="field-name">trueExpr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#trueExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The expression to evaluate if the condition is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="falseExpr"><code><span class="field-name">falseExpr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#falseExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The expression to evaluate if the condition is false.

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="each"><code><span class="field-name">each</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#each"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the ternary expression to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | Dynamic object containing ternary data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">condition</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">trueExpr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">falseExpr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ternary expression node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/headless/loreline/NodeId/) | | Node id  |
| `pos` | [Position](/api-docs/headless/loreline/Position/) | | Position in source where this expression appears  |
| `condition` | [NExpr](/api-docs/headless/loreline/NExpr/) | | The condition expression  |
| `trueExpr` | [NExpr](/api-docs/headless/loreline/NExpr/) | | Expression evaluated when condition is true  |
| `falseExpr` | [NExpr](/api-docs/headless/loreline/NExpr/) | | Expression evaluated when condition is false  |
| `leadingComments` | [Array](/api-docs/headless/Array/)<[Comment](/api-docs/headless/loreline/Comment/)> | *(optional)* | Optional comments before  |
| `trailingComments` | [Array](/api-docs/headless/Array/)<[Comment](/api-docs/headless/loreline/Comment/)> | *(optional)* | Optional comments after the expression |


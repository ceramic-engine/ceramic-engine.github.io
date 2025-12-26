---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NBinary
target: Clay (Native)
permalink: api-docs/clay-native/loreline/NBinary/
---

# NBinary

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/loreline/Node/">Node</a> → <a href="/api-docs/clay-native/loreline/AstNode/">AstNode</a> → <a href="/api-docs/clay-native/loreline/NExpr/">NExpr</a> → <strong>loreline.NBinary</strong> (Class)</div>

Represents a binary operation expression (a + b, a && b, etc).

## Instance Members

<div class="signature field-var has-description" id="left"><code><span class="field-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#left"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Left operand expression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="op"><code><span class="field-name">op</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#op"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Operator type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="right"><code><span class="field-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a></code><a class="header-anchor" href="#right"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right operand expression.

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="each"><code><span class="field-name">each</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#each"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the binary operation to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-native/Dynamic/) | Dynamic object containing operation data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">op</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new binary operation node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/clay-native/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/clay-native/loreline/Position/) | | Position in source where this operation appears  |
| `left` | [NExpr](/api-docs/clay-native/loreline/NExpr/) | | Left operand expression  |
| `op` | Anonymous | | Binary operator type  |
| `right` | [NExpr](/api-docs/clay-native/loreline/NExpr/) | | Right operand expression  |
| `leadingComments` | [Array](/api-docs/clay-native/Array/)<[Comment](/api-docs/clay-native/loreline/Comment/)> | *(optional)* | Optional comments before the operation  |
| `trailingComments` | [Array](/api-docs/clay-native/Array/)<[Comment](/api-docs/clay-native/loreline/Comment/)> | *(optional)* | Optional comments after the operation |


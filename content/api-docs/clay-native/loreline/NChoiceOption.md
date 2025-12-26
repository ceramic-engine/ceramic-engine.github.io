---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NChoiceOption
target: Clay (Native)
permalink: api-docs/clay-native/loreline/NChoiceOption/
---

# NChoiceOption

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/loreline/Node/">Node</a> → <a href="/api-docs/clay-native/loreline/AstNode/">AstNode</a> → <strong>loreline.NChoiceOption</strong> (Class)</div>

Represents a single option within a choice statement.

## Instance Members

<div class="signature field-var has-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NStringLiteral/" class="type-link">NStringLiteral</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text displayed for this option.

<hr class="field-separator" />

<div class="signature field-var has-description" id="insertion"><code><span class="field-name">insertion</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NInsertion/" class="type-link">NInsertion</a></code><a class="header-anchor" href="#insertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alternatively, instead of text, this could be an insertion

<hr class="field-separator" />

<div class="signature field-var has-description" id="condition"><code><span class="field-name">condition</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#condition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional condition that must be true for this option to be available.

<hr class="field-separator" />

<div class="signature field-var has-description" id="conditionStyle"><code><span class="field-name">conditionStyle</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ConditionStyle/" class="type-link">ConditionStyle</a></code><a class="header-anchor" href="#conditionStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The style of the condition (plain or parentheses).

<hr class="field-separator" />

<div class="signature field-var has-description" id="body"><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of nodes to execute when this option is chosen.

<hr class="field-separator" />

<div class="signature field-var has-description" id="style"><code><span class="field-name">style</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/BlockStyle/" class="type-link">BlockStyle</a></code><a class="header-anchor" href="#style"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The block style of the body

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

Converts the choice option to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-native/Dynamic/) | Dynamic object containing option data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NStringLiteral/" class="type-link">NStringLiteral</a><span class="operator">,</span> <span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NInsertion/" class="type-link">NInsertion</a><span class="operator">,</span> <span class="arg-name">condition</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">conditionStyle</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ConditionStyle/" class="type-link">ConditionStyle</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new choice option node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/clay-native/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/clay-native/loreline/Position/) | | Position in source where this option appears  |
| `text` | [NStringLiteral](/api-docs/clay-native/loreline/NStringLiteral/) | | String literal containing the option text  |
| `insertion` | [NInsertion](/api-docs/clay-native/loreline/NInsertion/) | |  |
| `condition` | [Null](/api-docs/clay-native/Null/)<[NExpr](/api-docs/clay-native/loreline/NExpr/)> | | Optional condition for option availability  |
| `conditionStyle` | [ConditionStyle](/api-docs/clay-native/loreline/ConditionStyle/) | | The style of the condition (plain or parentheses)  |
| `body` | [Array](/api-docs/clay-native/Array/)<[AstNode](/api-docs/clay-native/loreline/AstNode/)> | | Array of nodes to execute when chosen  |
| `leadingComments` | [Array](/api-docs/clay-native/Array/)<[Comment](/api-docs/clay-native/loreline/Comment/)> | *(optional)* | Optional comments before the option  |
| `trailingComments` | [Array](/api-docs/clay-native/Array/)<[Comment](/api-docs/clay-native/loreline/Comment/)> | *(optional)* | Optional comments after the option |


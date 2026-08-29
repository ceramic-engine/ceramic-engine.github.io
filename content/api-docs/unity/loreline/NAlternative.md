---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NAlternative
target: Unity
permalink: api-docs/unity/loreline/NAlternative/
---

# NAlternative

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/loreline/Node/">Node</a> → <a href="/api-docs/unity/loreline/AstNode/">AstNode</a> → <strong>loreline.NAlternative</strong> (Class)</div>

Represents an alternative block (sequence, cycle, once, pick, shuffle).

## Instance Members

<div class="signature field-var has-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AlternativeMode/" class="type-link">AlternativeMode</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The alternative mode (sequence, cycle, once, pick, shuffle).

<hr class="field-separator" />

<div class="signature field-var has-description" id="items"><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBlock/" class="type-link">NBlock</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of item blocks. Each item is a block of statements.

<hr class="field-separator" />

<div class="signature field-var has-description" id="style"><code><span class="field-name">style</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/BlockStyle/" class="type-link">BlockStyle</a></code><a class="header-anchor" href="#style"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The block style (indented or braces).

<hr class="field-separator" />

<div class="signature field-var has-description" id="separatorComments"><code><span class="field-name">separatorComments</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#separatorComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comments that appear before separator tokens.

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="each"><code><span class="field-name">each</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#each"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the alternative block to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Dynamic object containing alternative data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AlternativeMode/" class="type-link">AlternativeMode</a><span class="operator">,</span> <span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBlock/" class="type-link">NBlock</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new alternative block node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/unity/loreline/NodeId/) | | The node ID  |
| `pos` | [Position](/api-docs/unity/loreline/Position/) | | Position in source where this alternative appears  |
| `mode` | [AlternativeMode](/api-docs/unity/loreline/AlternativeMode/) | | The alternative mode  |
| `items` | [Array](/api-docs/unity/Array/)<[NBlock](/api-docs/unity/loreline/NBlock/)> | | Array of item blocks  |
| `leadingComments` | [Array](/api-docs/unity/Array/)<[Comment](/api-docs/unity/loreline/Comment/)> | *(optional)* | Optional comments before the alternative  |
| `trailingComments` | [Array](/api-docs/unity/Array/)<[Comment](/api-docs/unity/loreline/Comment/)> | *(optional)* | Optional comments after the alternative |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


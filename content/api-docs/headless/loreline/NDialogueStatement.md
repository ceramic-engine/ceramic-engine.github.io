---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NDialogueStatement
target: Headless
permalink: api-docs/headless/loreline/NDialogueStatement/
---

# NDialogueStatement

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/loreline/Node/">Node</a> → <a href="/api-docs/headless/loreline/AstNode/">AstNode</a> → <strong>loreline.NDialogueStatement</strong> (Class)</div>

Represents a dialogue statement in the AST (character: "text").

## Instance Members

<div class="signature field-var has-description" id="character"><code><span class="field-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#character"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Name of the speaking character.

<hr class="field-separator" />

<div class="signature field-var has-description" id="characterPos"><code><span class="field-name">characterPos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#characterPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the character label

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringLiteral/" class="type-link">NStringLiteral</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Content of the dialogue.

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

Converts the dialogue statement to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | Dynamic object containing dialogue data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">characterPos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringLiteral/" class="type-link">NStringLiteral</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">leadingComments</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trailingComments</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/Comment/" class="type-link">Comment</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new dialogue statement node.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [NodeId](/api-docs/headless/loreline/NodeId/) | |  |
| `pos` | [Position](/api-docs/headless/loreline/Position/) | | Position in source where this dialogue appears  |
| `character` | [String](/api-docs/headless/String/) | | Name of the speaking character  |
| `characterPos` | [Position](/api-docs/headless/loreline/Position/) | | Position of the character label  |
| `content` | [NStringLiteral](/api-docs/headless/loreline/NStringLiteral/) | | String literal containing the dialogue text  |
| `leadingComments` | [Array](/api-docs/headless/Array/)<[Comment](/api-docs/headless/loreline/Comment/)> | *(optional)* | Optional comments before the dialogue  |
| `trailingComments` | [Array](/api-docs/headless/Array/)<[Comment](/api-docs/headless/loreline/Comment/)> | *(optional)* | Optional comments after the dialogue |


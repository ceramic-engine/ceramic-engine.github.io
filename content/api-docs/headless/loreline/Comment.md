---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Comment
target: Headless
permalink: api-docs/headless/loreline/Comment/
---

# Comment

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/loreline/Node/">Node</a> → <strong>loreline.Comment</strong> (Class)</div>

Represents a comment node in the AST. Contains both the comment content
and whether it's a multiline comment.

## Instance Members

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual text content of the comment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="multiline"><code><span class="field-name">multiline</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this is a multiline comment (/* ... *\/) or single-line comment (//).

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the comment node to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | Dynamic object containing comment data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">multiline</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Comment node.


| Name | Type | Description |
|------|------|-------------|
| `id` | [NodeId](/api-docs/headless/loreline/NodeId/) |  |
| `pos` | [Position](/api-docs/headless/loreline/Position/) | Position in source where this comment appears  |
| `content` | [String](/api-docs/headless/String/) | The text content of the comment  |
| `multiline` | [Bool](/api-docs/headless/Bool/) | Whether this is a multiline comment |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Script
target: Unity
permalink: api-docs/unity/loreline/Script/
---

# Script

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Script.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/loreline/Node/">Node</a> → <a href="/api-docs/unity/loreline/AstNode/">AstNode</a> → <strong>loreline.Script</strong> (Class)</div>

Represents the root node of a Loreline script AST.

## Instance Members

<div class="signature field-var has-description" id="body"><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of top-level declarations in the script.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the script to a JSON representation.

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Dynamic object containing all script data |

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="eachExcludingImported"><code><span class="field-name">eachExcludingImported</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#eachExcludingImported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="each"><code><span class="field-name">each</span><span class="parenthesis">(</span><span class="arg-name">handleNode</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#each"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handleNode` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/_Script/ScriptBodyIterator/" class="type-link">loreline._Script.ScriptBodyIterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Script.ScriptBodyIterator](/api-docs/unity/loreline/_Script/ScriptBodyIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new script root node.


| Name | Type | Description |
|------|------|-------------|
| `id` | [NodeId](/api-docs/unity/loreline/NodeId/) | The node id of this script  |
| `pos` | [Position](/api-docs/unity/loreline/Position/) | Position in source where this script starts  |
| `body` | [Array](/api-docs/unity/Array/)<[AstNode](/api-docs/unity/loreline/AstNode/)> | Array of top-level declarations |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NodeFilter
target: Clay (Web)
permalink: api-docs/clay-web/js/html/NodeFilter/
---

# NodeFilter

<div class="type-hierarchy"><strong>js.html.NodeFilter</strong> (extern class)</div>

A `NodeFilter` interface represents an object used to filter the nodes in a `NodeIterator` or `TreeWalker`. They don't know anything about the DOM or how to traverse nodes; they just know how to evaluate a single node against the provided filter.

Documentation [NodeFilter](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter></div>


## Static Members

<div class="signature field-var no-description" id="FILTER_ACCEPT"><code><span class="field-name">FILTER_ACCEPT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FILTER_ACCEPT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FILTER_REJECT"><code><span class="field-name">FILTER_REJECT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FILTER_REJECT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FILTER_SKIP"><code><span class="field-name">FILTER_SKIP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FILTER_SKIP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_ALL"><code><span class="field-name">SHOW_ALL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_ALL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_ELEMENT"><code><span class="field-name">SHOW_ELEMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_ELEMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_ATTRIBUTE"><code><span class="field-name">SHOW_ATTRIBUTE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_ATTRIBUTE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_TEXT"><code><span class="field-name">SHOW_TEXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_TEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_CDATA_SECTION"><code><span class="field-name">SHOW_CDATA_SECTION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_CDATA_SECTION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_ENTITY_REFERENCE"><code><span class="field-name">SHOW_ENTITY_REFERENCE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_ENTITY_REFERENCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_ENTITY"><code><span class="field-name">SHOW_ENTITY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_ENTITY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_PROCESSING_INSTRUCTION"><code><span class="field-name">SHOW_PROCESSING_INSTRUCTION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_PROCESSING_INSTRUCTION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_COMMENT"><code><span class="field-name">SHOW_COMMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_COMMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_DOCUMENT"><code><span class="field-name">SHOW_DOCUMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_DOCUMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_DOCUMENT_TYPE"><code><span class="field-name">SHOW_DOCUMENT_TYPE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_DOCUMENT_TYPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_DOCUMENT_FRAGMENT"><code><span class="field-name">SHOW_DOCUMENT_FRAGMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_DOCUMENT_FRAGMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHOW_NOTATION"><code><span class="field-name">SHOW_NOTATION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHOW_NOTATION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-method has-description" id="acceptNode"><code><span class="field-name">acceptNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#acceptNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an <code>unsigned short</code> that will be used to tell if a given <code>Node</code> must be accepted or not by the <code>NodeIterator</code> or <code>TreeWalker</code> iteration algorithm. This method is expected to be written by the user of a <code>NodeFilter</code>. Possible return values are:
<table class="standard-table">

<tr>
<td class="header">Constant</td>
<td class="header">Description</td>
</tr>
<tr>
<td><code>FILTER_ACCEPT</code></td>
<td>Value returned by the <code>NodeFilter.acceptNode()</code> method when a node should be accepted.</td>
</tr>
<tr>
<td><code>FILTER_REJECT</code></td>
<td>Value to be returned by the <code>NodeFilter.acceptNode()</code> method when a node should be rejected. For <code>TreeWalker</code>, child nodes are also rejected. For <code>NodeIterator</code>, this flag is synonymous with FILTER_SKIP.</td>
</tr>
<tr>
<td><code>FILTER_SKIP</code></td>
<td>Value to be returned by <code>NodeFilter.acceptNode()</code> for nodes to be skipped by the <code>NodeIterator</code> or <code>TreeWalker</code> object. The children of skipped nodes are still considered. This is treated as "skip this node but not its children".</td>
</tr>

</table>

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |


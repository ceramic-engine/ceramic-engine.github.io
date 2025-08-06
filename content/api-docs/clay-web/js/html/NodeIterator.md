---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NodeIterator
target: Clay (Web)
permalink: api-docs/clay-web/js/html/NodeIterator/
---

# NodeIterator

<div class="type-hierarchy"><strong>js.html.NodeIterator</strong> (extern class)</div>

The `NodeIterator` interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.

Documentation [NodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator></div>


## Instance Members

<div class="signature field-var has-description" id="root"><code><span class="field-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` representing the root node as specified when the `NodeIterator` was created.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referenceNode"><code><span class="field-name">referenceNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#referenceNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Node` to which the iterator is anchored.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointerBeforeReferenceNode"><code><span class="field-name">pointerBeforeReferenceNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointerBeforeReferenceNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` flag that indicates whether the `NodeIterator` is anchored before, the flag being `true`, or after, the flag being `false`, the anchor node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="whatToShow"><code><span class="field-name">whatToShow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#whatToShow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an <code>unsigned long</code> being a bitmask made of constants describing the types of <code>Node</code> that must to be presented. Non-matching nodes are skipped, but their children may be included, if relevant. The possible values are:
<table class="standard-table">

<tr>
<td class="header">Constant</td>
<td class="header">Numerical value</td>
<td class="header">Description</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_ALL</code></td>
<td><code>-1</code> (that is the max value of <code>unsigned long</code>)</td>
<td>Shows all nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_ATTRIBUTE</code> <em>(deprecated)</em></td>
<td><code>2</code></td>
<td>Shows attribute <code>Attr</code> nodes. This is meaningful only when creating a <code>NodeIterator</code> with an <code>Attr</code> node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_CDATA_SECTION</code> <em>(deprecated)</em></td>
<td><code>8</code></td>
<td>Shows <code>CDATASection</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_COMMENT</code></td>
<td><code>128</code></td>
<td>Shows <code>Comment</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_DOCUMENT</code></td>
<td><code>256</code></td>
<td>Shows <code>Document</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_DOCUMENT_FRAGMENT</code></td>
<td><code>1024</code></td>
<td>Shows <code>DocumentFragment</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_DOCUMENT_TYPE</code></td>
<td><code>512</code></td>
<td>Shows <code>DocumentType</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_ELEMENT</code></td>
<td><code>1</code></td>
<td>Shows <code>Element</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_ENTITY</code> <em>(deprecated)</em></td>
<td><code>32</code></td>
<td>Shows <code>Entity</code> nodes. This is meaningful only when creating a <code>NodeIterator</code> with an <code>Entity</code> node as its root; in this case, it means that the <code>Entity</code> node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_ENTITY_REFERENCE</code> <em>(deprecated)</em></td>
<td><code>16</code></td>
<td>Shows <code>EntityReference</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_NOTATION</code> <em>(deprecated)</em></td>
<td><code>2048</code></td>
<td>Shows <code>Notation</code> nodes. This is meaningful only when creating a <code>NodeIterator</code> with a <code>Notation</code> node as its root; in this case, it means that the <code>Notation</code> node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_PROCESSING_INSTRUCTION</code></td>
<td><code>64</code></td>
<td>Shows <code>ProcessingInstruction</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_TEXT</code></td>
<td><code>4</code></td>
<td>Shows <code>Text</code> nodes.</td>
</tr>

</table>

<hr class="field-separator" />

<div class="signature field-var has-description" id="filter"><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">,</span> <a href="/api-docs/clay-web/js/html/NodeFilter/" class="type-link">NodeFilter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `NodeFilter` used to select the relevant nodes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextNode"><code><span class="field-name">nextNode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#nextNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the next `Node` in the document, or `null` if there are none.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="previousNode"><code><span class="field-name">previousNode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#previousNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the previous `Node` in the document, or `null` if there are none.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="detach"><code><span class="field-name">detach</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#detach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This operation is a no-op. It doesn't do anything. Previously it was telling the engine that the `NodeIterator` was no more used, but this is now useless.


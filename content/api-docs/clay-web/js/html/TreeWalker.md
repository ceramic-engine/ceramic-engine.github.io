---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TreeWalker
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TreeWalker/
---

# TreeWalker

<div class="type-hierarchy"><strong>js.html.TreeWalker</strong> (extern class)</div>

The `TreeWalker` object represents the nodes of a document subtree and a position within them.

Documentation [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker></div>


## Instance Members

<div class="signature field-var has-description" id="root"><code><span class="field-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` representing the root node as specified when the `TreeWalker` was created.

<hr class="field-separator" />

<div class="signature field-var has-description" id="whatToShow"><code><span class="field-name">whatToShow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#whatToShow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an <code>unsigned long</code> being a bitmask made of constants describing the types of <code>Node</code> that must be presented. Non-matching nodes are skipped, but their children may be included, if relevant. The possible values are:
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
<td><code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}</td>
<td><code>2</code></td>
<td>Shows attribute <code>Attr</code> nodes. This is meaningful only when creating a <code>TreeWalker</code> with an <code>Attr</code> node as its root. In this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_CDATA_SECTION</code> {{deprecated_inline}}</td>
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
<td><code>NodeFilter.SHOW_ENTITY</code> {{deprecated_inline}}</td>
<td><code>32</code></td>
<td>Shows <code>Entity</code> nodes. This is meaningful only when creating a <code>TreeWalker</code> with an <code>Entity</code> node as its root; in this case, it means that the <code>Entity</code> node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_ENTITY_REFERENCE</code> {{deprecated_inline}}</td>
<td><code>16</code></td>
<td>Shows <code>EntityReference</code> nodes.</td>
</tr>
<tr>
<td><code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}</td>
<td><code>2048</code></td>
<td>Shows <code>Notation</code> nodes. This is meaningful only when creating a <code>TreeWalker</code> with a <code>Notation</code> node as its root; in this case, it means that the <code>Notation</code> node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.</td>
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

<div class="signature field-var has-description" id="currentNode"><code><span class="field-name">currentNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#currentNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is the `Node` on which the `TreeWalker` is currently pointing at.

<hr class="field-separator" />

<div class="signature field-method has-description" id="parentNode"><code><span class="field-name">parentNode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#parentNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to the first visible ancestor node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns `null` and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="firstChild"><code><span class="field-name">firstChild</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#firstChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to the first visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns `null` and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lastChild"><code><span class="field-name">lastChild</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#lastChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to the last visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, `null` is returned and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="previousSibling"><code><span class="field-name">previousSibling</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#previousSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to its previous sibling, if any, and returns the found sibling. If there is no such node, return `null` and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextSibling"><code><span class="field-name">nextSibling</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#nextSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to its next sibling, if any, and returns the found sibling. If there is no such node, `null` is returned and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="previousNode"><code><span class="field-name">previousNode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#previousNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to the previous visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns `null` and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextNode"><code><span class="field-name">nextNode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#nextNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current `Node` to the next visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, returns `null` and the current node is not changed.
| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |


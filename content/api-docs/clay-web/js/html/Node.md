---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Node
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Node/
---

# Node

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.Node</strong> (extern class) → <a href="/api-docs/clay-web/js/html/Attr/">Attr</a>, <a href="/api-docs/clay-web/js/html/CharacterData/">CharacterData</a>, <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a>, <a href="/api-docs/clay-web/js/html/Document/">Document</a>, <a href="/api-docs/clay-web/js/html/DocumentFragment/">DocumentFragment</a>, <a href="/api-docs/clay-web/js/html/DocumentType/">DocumentType</a></div>

`Node` is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.

Documentation [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Node$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Node></div>


## Static Members

<div class="signature field-var no-description" id="ELEMENT_NODE"><code><span class="field-name">ELEMENT_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ELEMENT_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ATTRIBUTE_NODE"><code><span class="field-name">ATTRIBUTE_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ATTRIBUTE_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXT_NODE"><code><span class="field-name">TEXT_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXT_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CDATA_SECTION_NODE"><code><span class="field-name">CDATA_SECTION_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CDATA_SECTION_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ENTITY_REFERENCE_NODE"><code><span class="field-name">ENTITY_REFERENCE_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ENTITY_REFERENCE_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ENTITY_NODE"><code><span class="field-name">ENTITY_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ENTITY_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PROCESSING_INSTRUCTION_NODE"><code><span class="field-name">PROCESSING_INSTRUCTION_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PROCESSING_INSTRUCTION_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COMMENT_NODE"><code><span class="field-name">COMMENT_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMMENT_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_NODE"><code><span class="field-name">DOCUMENT_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_TYPE_NODE"><code><span class="field-name">DOCUMENT_TYPE_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_TYPE_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_FRAGMENT_NODE"><code><span class="field-name">DOCUMENT_FRAGMENT_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_FRAGMENT_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NOTATION_NODE"><code><span class="field-name">NOTATION_NODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NOTATION_NODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_POSITION_DISCONNECTED"><code><span class="field-name">DOCUMENT_POSITION_DISCONNECTED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_POSITION_DISCONNECTED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_POSITION_PRECEDING"><code><span class="field-name">DOCUMENT_POSITION_PRECEDING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_POSITION_PRECEDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_POSITION_FOLLOWING"><code><span class="field-name">DOCUMENT_POSITION_FOLLOWING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_POSITION_FOLLOWING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_POSITION_CONTAINS"><code><span class="field-name">DOCUMENT_POSITION_CONTAINS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_POSITION_CONTAINS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_POSITION_CONTAINED_BY"><code><span class="field-name">DOCUMENT_POSITION_CONTAINED_BY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_POSITION_CONTAINED_BY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"><code><span class="field-name">DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="nodeType"><code><span class="field-name">nodeType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nodeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an <code>unsigned short</code> representing the type of the node. Possible values are:
<table class="standard-table">

<tr>
Name
Value
</tr>
<tr>
<td><code>ELEMENT_NODE</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td><code>ATTRIBUTE_NODE</code> <em>(deprecated)</em></td>
<td><code>2</code></td>
</tr>
<tr>
<td><code>TEXT_NODE</code></td>
<td><code>3</code></td>
</tr>
<tr>
<td><code>CDATA_SECTION_NODE</code> <em>(deprecated)</em></td>
<td><code>4</code></td>
</tr>
<tr>
<td><code>ENTITY_REFERENCE_NODE</code> <em>(deprecated)</em></td>
<td><code>5</code></td>
</tr>
<tr>
<td><code>ENTITY_NODE</code> <em>(deprecated)</em></td>
<td><code>6</code></td>
</tr>
<tr>
<td><code>PROCESSING_INSTRUCTION_NODE</code></td>
<td><code>7</code></td>
</tr>
<tr>
<td><code>COMMENT_NODE</code></td>
<td><code>8</code></td>
</tr>
<tr>
<td><code>DOCUMENT_NODE</code></td>
<td><code>9</code></td>
</tr>
<tr>
<td><code>DOCUMENT_TYPE_NODE</code></td>
<td><code>10</code></td>
</tr>
<tr>
<td><code>DOCUMENT_FRAGMENT_NODE</code></td>
<td><code>11</code></td>
</tr>
<tr>
<td><code>NOTATION_NODE</code> <em>(deprecated)</em></td>
<td><code>12</code></td>
</tr>

</table>

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodeName"><code><span class="field-name">nodeName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#nodeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` containing the name of the `Node`. The structure of the name will differ with the node type. E.g. An `HTMLElement` will contain the name of the corresponding tag, like `'audio'` for an `HTMLAudioElement`, a `Text` node will have the `'#text'` string, or a `Document` node will have the `'#document'` string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="baseURI"><code><span class="field-name">baseURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#baseURI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing the base URL. The concept of base URL changes from one language to another; in HTML, it corresponds to the protocol, the domain name and the directory structure, that is all until the last `'/'`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isConnected"><code><span class="field-name">isConnected</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isConnected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g. the `Document` object in the case of the normal DOM, or the `ShadowRoot` in the case of a shadow DOM.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ownerDocument"><code><span class="field-name">ownerDocument</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#ownerDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Document` that this node belongs to. If the node is itself a document, returns `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentNode"><code><span class="field-name">parentNode</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#parentNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentElement"><code><span class="field-name">parentElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#parentElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Element` that is the parent of this node. If the node has no parent, or if that parent is not an `Element`, this property returns `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="childNodes"><code><span class="field-name">childNodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#childNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `NodeList` containing all the children of this node. `NodeList` being live means that if the children of the `Node` change, the `NodeList` object is automatically updated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="firstChild"><code><span class="field-name">firstChild</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#firstChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` representing the first direct child node of the node, or `null` if the node has no child.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastChild"><code><span class="field-name">lastChild</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#lastChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` representing the last direct child node of the node, or `null` if the node has no child.

<hr class="field-separator" />

<div class="signature field-var has-description" id="previousSibling"><code><span class="field-name">previousSibling</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#previousSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` representing the previous node in the tree, or `null` if there isn't such node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextSibling"><code><span class="field-name">nextSibling</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#nextSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` representing the next node in the tree, or `null` if there isn't such node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodeValue"><code><span class="field-name">nodeValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#nodeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns / Sets the value of the current node

<hr class="field-separator" />

<div class="signature field-var has-description" id="textContent"><code><span class="field-name">textContent</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#textContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns / Sets the textual content of an element and all its descendants.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRootNode"><code><span class="field-name">getRootNode</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/GetRootNodeOptions/" class="type-link">GetRootNodeOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#getRootNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the context object's root which optionally includes the shadow root if it is available. 

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[GetRootNodeOptions](/api-docs/clay-web/js/html/GetRootNodeOptions/)> | *(optional)* |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasChildNodes"><code><span class="field-name">hasChildNodes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasChildNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if the element has any child nodes, or not.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertBefore"><code><span class="field-name">insertBefore</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">child</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#insertBefore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts a `Node` before the reference node as a child of a specified parent node.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |
| `child` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="appendChild"><code><span class="field-name">appendChild</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#appendChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the specified childNode argument as the last child to the current node.

If the argument referenced an existing node on the DOM tree, the node will be detached from its current position and attached at the new position.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceChild"><code><span class="field-name">replaceChild</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">child</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#replaceChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces one child `Node` of the current one with the second one given in parameter.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |
| `child` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeChild"><code><span class="field-name">removeChild</span><span class="parenthesis">(</span><span class="arg-name">child</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#removeChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a child node from the current element, which must be a child of the current node.

| Name | Type |
|------|------|
| `child` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="normalize"><code><span class="field-name">normalize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#normalize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clean up all the text nodes under this element (merge adjacent, remove empty).

<hr class="field-separator" />

<div class="signature field-method has-description" id="cloneNode"><code><span class="field-name">cloneNode</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">deep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Node</a></code><a class="header-anchor" href="#cloneNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clone a `Node`, and optionally, all of its contents. By default, it clones the content of the node.

| Name | Type | Default |
|------|------|---------|
| `deep` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isSameNode"><code><span class="field-name">isSameNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSameNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` value indicating whether or not the two nodes are the same (that is, they reference the same object).

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEqualNode"><code><span class="field-name">isEqualNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEqualNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` which indicates whether or not two nodes are of the same type and all their defining data points match.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compareDocumentPosition"><code><span class="field-name">compareDocumentPosition</span><span class="parenthesis">(</span><span class="arg-name">other</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareDocumentPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares the position of the current node against another node in any other document.

| Name | Type |
|------|------|
| `other` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">other</span><span class="operator">:</span> <a href="#" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` value indicating whether a node is a descendant of a given node or not.

| Name | Type |
|------|------|
| `other` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lookupPrefix"><code><span class="field-name">lookupPrefix</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lookupPrefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` containing the prefix for a given namespace URI, if present, and `null` if not. When multiple prefixes are possible, the result is implementation-dependent.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lookupNamespaceURI"><code><span class="field-name">lookupNamespaceURI</span><span class="parenthesis">(</span><span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lookupNamespaceURI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Accepts a prefix and returns the namespace URI associated with it on the given node if found (and `null` if not). Supplying `null` for the prefix will return the default namespace.

| Name | Type |
|------|------|
| `prefix` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDefaultNamespace"><code><span class="field-name">isDefaultNamespace</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDefaultNamespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Accepts a namespace URI as an argument and returns a `Boolean` with a value of `true` if the namespace is the default namespace on the given node or `false` if not.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |


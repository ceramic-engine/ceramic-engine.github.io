---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Range
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Range/
---

# Range

<div class="type-hierarchy"><strong>js.html.Range</strong> (extern class)</div>

The `Range` interface represents a fragment of a document that can contain nodes and parts of text nodes.

Documentation [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Range$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Range></div>


## Static Members

<div class="signature field-var no-description" id="START_TO_START"><code><span class="field-name">START_TO_START</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#START_TO_START"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="START_TO_END"><code><span class="field-name">START_TO_END</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#START_TO_END"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="END_TO_END"><code><span class="field-name">END_TO_END</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#END_TO_END"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="END_TO_START"><code><span class="field-name">END_TO_START</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#END_TO_START"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="startContainer"><code><span class="field-name">startContainer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#startContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Node` within which the `Range` starts.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startOffset"><code><span class="field-name">startOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#startOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a number representing where in the `startContainer` the `Range` starts.

<hr class="field-separator" />

<div class="signature field-var has-description" id="endContainer"><code><span class="field-name">endContainer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#endContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Node` within which the `Range` ends.

<hr class="field-separator" />

<div class="signature field-var has-description" id="endOffset"><code><span class="field-name">endOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#endOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a number representing where in the `endContainer` the `Range` ends.

<hr class="field-separator" />

<div class="signature field-var has-description" id="collapsed"><code><span class="field-name">collapsed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating whether the range's start and end points are at the same position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="commonAncestorContainer"><code><span class="field-name">commonAncestorContainer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#commonAncestorContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the deepest `Node` that contains the `startContainer` and `endContainer` nodes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setStart"><code><span class="field-name">setStart</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the start position of a `Range`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setEnd"><code><span class="field-name">setEnd</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the end position of a `Range`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setStartBefore"><code><span class="field-name">setStartBefore</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStartBefore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the start position of a `Range` relative to another `Node`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setStartAfter"><code><span class="field-name">setStartAfter</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStartAfter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the start position of a `Range` relative to another `Node`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setEndBefore"><code><span class="field-name">setEndBefore</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEndBefore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the end position of a `Range` relative to another `Node`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setEndAfter"><code><span class="field-name">setEndAfter</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEndAfter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the end position of a `Range` relative to another `Node`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="collapse"><code><span class="field-name">collapse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">toStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collapse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collapses the `Range` to one of its boundary points.

| Name | Type | Default |
|------|------|---------|
| `toStart` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="selectNode"><code><span class="field-name">selectNode</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#selectNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `Range` to contain the `Node` and its contents.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="selectNodeContents"><code><span class="field-name">selectNodeContents</span><span class="parenthesis">(</span><span class="arg-name">refNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#selectNodeContents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `Range` to contain the contents of a `Node`.

| Name | Type |
|------|------|
| `refNode` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compareBoundaryPoints"><code><span class="field-name">compareBoundaryPoints</span><span class="parenthesis">(</span><span class="arg-name">how</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sourceRange</span><span class="operator">:</span> <a href="#" class="type-link">Range</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareBoundaryPoints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares the boundary points of the `Range` with another `Range`.

| Name | Type |
|------|------|
| `how` | [Int](/api-docs/clay-web/Int/) |
| `sourceRange` | [Range](/api-docs/clay-web/js/html/Range/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteContents"><code><span class="field-name">deleteContents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteContents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the contents of a `Range` from the `Document`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="extractContents"><code><span class="field-name">extractContents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentFragment/" class="type-link">DocumentFragment</a></code><a class="header-anchor" href="#extractContents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves contents of a `Range` from the document tree into a `DocumentFragment`.
| Returns |
|---------|
| [DocumentFragment](/api-docs/clay-web/js/html/DocumentFragment/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cloneContents"><code><span class="field-name">cloneContents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentFragment/" class="type-link">DocumentFragment</a></code><a class="header-anchor" href="#cloneContents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DocumentFragment` copying the nodes of a `Range`.
| Returns |
|---------|
| [DocumentFragment](/api-docs/clay-web/js/html/DocumentFragment/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertNode"><code><span class="field-name">insertNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Insert a `Node` at the start of a `Range`.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="surroundContents"><code><span class="field-name">surroundContents</span><span class="parenthesis">(</span><span class="arg-name">newParent</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#surroundContents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves content of a `Range` into a new `Node`.

| Name | Type |
|------|------|
| `newParent` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cloneRange"><code><span class="field-name">cloneRange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Range</a></code><a class="header-anchor" href="#cloneRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Range` object with boundary points identical to the cloned `Range`.
| Returns |
|---------|
| [Range](/api-docs/clay-web/js/html/Range/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="detach"><code><span class="field-name">detach</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#detach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Releases the `Range` from use to improve performance.

<hr class="field-separator" />

<div class="signature field-method has-description" id="isPointInRange"><code><span class="field-name">isPointInRange</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPointInRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `boolean` indicating whether the given point is in the `Range`.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="comparePoint"><code><span class="field-name">comparePoint</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#comparePoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the `Range`.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="intersectsNode"><code><span class="field-name">intersectsNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intersectsNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `boolean` indicating whether the given node intersects the `Range`.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createContextualFragment"><code><span class="field-name">createContextualFragment</span><span class="parenthesis">(</span><span class="arg-name">fragment</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentFragment/" class="type-link">DocumentFragment</a></code><a class="header-anchor" href="#createContextualFragment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DocumentFragment` created from a given string of code.

| Name | Type |
|------|------|
| `fragment` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [DocumentFragment](/api-docs/clay-web/js/html/DocumentFragment/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getClientRects"><code><span class="field-name">getClientRects</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectList/" class="type-link">DOMRectList</a></code><a class="header-anchor" href="#getClientRects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of `DOMRect` objects that aggregates the results of `Element.getClientRects()` for all the elements in the `Range`.
| Returns |
|---------|
| [DOMRectList](/api-docs/clay-web/js/html/DOMRectList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoundingClientRect"><code><span class="field-name">getBoundingClientRect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRect/" class="type-link">DOMRect</a></code><a class="header-anchor" href="#getBoundingClientRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMRect` object which bounds the entire contents of the `Range`; this would be the union of all the rectangles returned by `range.getClientRects()`.
| Returns |
|---------|
| [DOMRect](/api-docs/clay-web/js/html/DOMRect/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>




---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Selection
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Selection/
---

# Selection

<div class="type-hierarchy"><strong>js.html.Selection</strong> (extern class)</div>

A `Selection` object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or modification, call `window.getSelection()`.

Documentation [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Selection$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Selection></div>


## Instance Members

<div class="signature field-var has-description" id="anchorNode"><code><span class="field-name">anchorNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#anchorNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Node` in which the selection begins.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorOffset"><code><span class="field-name">anchorOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#anchorOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a number representing the offset of the selection's anchor within the anchorNode. If anchorNode is a text node, this is the number of characters within anchorNode preceding the anchor. If anchorNode is an element, this is the number of child nodes of the anchorNode preceding the anchor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="focusNode"><code><span class="field-name">focusNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#focusNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Node` in which the selection ends.

<hr class="field-separator" />

<div class="signature field-var has-description" id="focusOffset"><code><span class="field-name">focusOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#focusOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a number representing the offset of the selection's anchor within the focusNode. If focusNode is a text node, this is the number of characters within focusNode preceding the focus. If focusNode is an element, this is the number of child nodes of the focusNode preceding the focus.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isCollapsed"><code><span class="field-name">isCollapsed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCollapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating whether the selection's start and end points are at the same position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeCount"><code><span class="field-name">rangeCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rangeCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of ranges in the selection.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` describing the type of the current selection.

<hr class="field-separator" />

<div class="signature field-var no-description" id="caretBidiLevel"><code><span class="field-name">caretBidiLevel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#caretBidiLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRangeAt"><code><span class="field-name">getRangeAt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Range/" class="type-link">Range</a></code><a class="header-anchor" href="#getRangeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Range` object representing one of the ranges currently selected.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Range](/api-docs/clay-web/js/html/Range/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRange"><code><span class="field-name">addRange</span><span class="parenthesis">(</span><span class="arg-name">range</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Range/" class="type-link">Range</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Range` object that will be added to the selection.

| Name | Type |
|------|------|
| `range` | [Range](/api-docs/clay-web/js/html/Range/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeRange"><code><span class="field-name">removeRange</span><span class="parenthesis">(</span><span class="arg-name">range</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Range/" class="type-link">Range</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a range from the selection.

| Name | Type |
|------|------|
| `range` | [Range](/api-docs/clay-web/js/html/Range/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeAllRanges"><code><span class="field-name">removeAllRanges</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAllRanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all ranges from the selection.

<hr class="field-separator" />

<div class="signature field-method has-description" id="empty"><code><span class="field-name">empty</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#empty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



<hr class="field-separator" />

<div class="signature field-method has-description" id="collapse"><code><span class="field-name">collapse</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collapse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collapses the current selection to a single point.

| Name | Type | Default |
|------|------|---------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `offset` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPosition"><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `offset` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="collapseToStart"><code><span class="field-name">collapseToStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collapseToStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collapses the selection to the start of the first range in the selection.

<hr class="field-separator" />

<div class="signature field-method has-description" id="collapseToEnd"><code><span class="field-name">collapseToEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collapseToEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collapses the selection to the end of the last range in the selection.

<hr class="field-separator" />

<div class="signature field-method has-description" id="extend"><code><span class="field-name">extend</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#extend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the focus of the selection to a specified point.

| Name | Type | Default |
|------|------|---------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `offset` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setBaseAndExtent"><code><span class="field-name">setBaseAndExtent</span><span class="parenthesis">(</span><span class="arg-name">anchorNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">anchorOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">focusNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">focusOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBaseAndExtent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.

| Name | Type |
|------|------|
| `anchorNode` | [Node](/api-docs/clay-web/js/html/Node/) |
| `anchorOffset` | [Int](/api-docs/clay-web/Int/) |
| `focusNode` | [Node](/api-docs/clay-web/js/html/Node/) |
| `focusOffset` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="selectAllChildren"><code><span class="field-name">selectAllChildren</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#selectAllChildren"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds all the children of the specified node to the selection.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteFromDocument"><code><span class="field-name">deleteFromDocument</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteFromDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes the selection's content from the document.

<hr class="field-separator" />

<div class="signature field-method has-description" id="containsNode"><code><span class="field-name">containsNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowPartialContainment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#containsNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates if a certain node is part of the selection.

| Name | Type | Default |
|------|------|---------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `allowPartialContainment` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="modify"><code><span class="field-name">modify</span><span class="parenthesis">(</span><span class="arg-name">alter</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">granularity</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#modify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Changes the current selection.

| Name | Type |
|------|------|
| `alter` | [String](/api-docs/clay-web/String/) |
| `direction` | [String](/api-docs/clay-web/String/) |
| `granularity` | [String](/api-docs/clay-web/String/) |


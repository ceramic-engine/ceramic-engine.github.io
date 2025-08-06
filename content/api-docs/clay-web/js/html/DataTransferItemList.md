---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DataTransferItemList
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DataTransferItemList/
---

# DataTransferItemList

<div class="type-hierarchy"><strong>js.html.DataTransferItemList</strong> (extern class)</div>

The `DataTransferItemList` object is a list of `DataTransferItem` objects representing items being dragged. During a drag operation, each `DragEvent` has a `dataTransfer` property and that property is a `DataTransferItemList`.

Documentation [DataTransferItemList](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `unsigned long` that is the number of drag items in the list.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/File/" class="type-link">File</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DataTransferItem/" class="type-link">DataTransferItem</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an item (either a `File` object or a `DOMString`) to the drag item list and returns a `DataTransferItem` object for the new item.

| Name | Type |
|------|------|
| `data` | [File](/api-docs/clay-web/js/html/File/) |

| Returns |
|---------|
| [DataTransferItem](/api-docs/clay-web/js/html/DataTransferItem/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the drag item from the list at the given index.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all of the drag items from the list.


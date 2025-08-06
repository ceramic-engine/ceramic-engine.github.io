---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DataTransfer
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DataTransfer/
---

# DataTransfer

<div class="type-hierarchy"><strong>js.html.DataTransfer</strong> (extern class)</div>

The `DataTransfer` object is used to hold the data that is being dragged during a drag and drop operation. It may hold one or more data items, each of one or more data types. For more information about drag and drop, see HTML Drag and Drop API.

Documentation [DataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer></div>


## Instance Members

<div class="signature field-var has-description" id="dropEffect"><code><span class="field-name">dropEffect</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#dropEffect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the type of drag-and-drop operation currently selected or sets the operation to a new type. The value must be `none`, `copy`, `link` or `move`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="effectAllowed"><code><span class="field-name">effectAllowed</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#effectAllowed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides all of the types of operations that are possible. Must be one of `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` or `uninitialized`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="items"><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DataTransferItemList/" class="type-link">DataTransferItemList</a></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives a `DataTransferItemList` object which is a list of all of the drag data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="types"><code><span class="field-name">types</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#types"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of `DOMString` giving the formats that were set in the `dragstart` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="files"><code><span class="field-name">files</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FileList/" class="type-link">FileList</a></code><a class="header-anchor" href="#files"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Contains a list of all the local files available on the data transfer. If the drag operation doesn't involve dragging files, this property is an empty list.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setDragImage"><code><span class="field-name">setDragImage</span><span class="parenthesis">(</span><span class="arg-name">image</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDragImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the image to be used for dragging if a custom one is desired.

| Name | Type |
|------|------|
| `image` | [Element](/api-docs/clay-web/js/html/Element/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getData"><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the data for a given type, or an empty string if data for that type does not exist or the data transfer contains no data.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setData"><code><span class="field-name">setData</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the data for a given type. If data for the type does not exist, it is added at the end, such that the last item in the types list will be the new format. If data for the type already exists, the existing data is replaced in the same position.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/clay-web/String/) |
| `data` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearData"><code><span class="field-name">clearData</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove the data associated with a given type. The type argument is optional. If the type is empty or not specified, the data associated with all types is removed. If data for the specified type does not exist, or the data transfer contains no data, this method will have no effect.

| Name | Type | Default |
|------|------|---------|
| `format` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addElement"><code><span class="field-name">addElement</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the drag source to the given element.

| Name | Type |
|------|------|
| `element` | [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>




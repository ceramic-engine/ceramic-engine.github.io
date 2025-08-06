---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DataTransferItem
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DataTransferItem/
---

# DataTransferItem

<div class="type-hierarchy"><strong>js.html.DataTransferItem</strong> (extern class)</div>

The `DataTransferItem` object represents one drag data item. During a drag operation, each `drag event` has a `dataTransfer` property which contains a `list` of drag data items. Each item in the list is a `DataTransferItem` object.

Documentation [DataTransferItem](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem></div>


## Instance Members

<div class="signature field-var has-description" id="kind"><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The kind of drag data item, `string` or `file`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The drag data item's type, typically a MIME type.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAsString"><code><span class="field-name">getAsString</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getAsString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invokes the specified callback with the drag data item string as its argument.

| Name | Type |
|------|------|
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAsFile"><code><span class="field-name">getAsFile</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/File/" class="type-link">File</a></code><a class="header-anchor" href="#getAsFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `File` object associated with the drag data item (or null if the drag item is not a file).
| Returns |
|---------|
| [File](/api-docs/clay-web/js/html/File/) |


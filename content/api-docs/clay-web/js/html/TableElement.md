---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TableElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TableElement/
---

# TableElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.TableElement</strong> (extern class)</div>

The `HTMLTableElement` interface provides special properties and methods (beyond the regular `HTMLElement` object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document.

Documentation [HTMLTableElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement></div>


## Instance Members

<div class="signature field-var has-description" id="caption"><code><span class="field-name">caption</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableCaptionElement/" class="type-link">TableCaptionElement</a></code><a class="header-anchor" href="#caption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `HTMLTableCaptionElement` representing the first `caption` that is a child of the element, or `null` if none is found. When set, if the object doesn't represent a `caption`, a `DOMException` with the `HierarchyRequestError` name is thrown. If a correct object is given, it is inserted in the tree as the first child of this element and the first `caption` that is a child of this element is removed from the tree, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tHead"><code><span class="field-name">tHead</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableSectionElement/" class="type-link">TableSectionElement</a></code><a class="header-anchor" href="#tHead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `HTMLTableSectionElement` representing the first `thead` that is a child of the element, or `null` if none is found. When set, if the object doesn't represent a `thead`, a `DOMException` with the `HierarchyRequestError` name is thrown. If a correct object is given, it is inserted in the tree immediately before the first element that is neither a `caption`, nor a `colgroup`, or as the last child if there is no such element, and the first `thead` that is a child of this element is removed from the tree, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tFoot"><code><span class="field-name">tFoot</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableSectionElement/" class="type-link">TableSectionElement</a></code><a class="header-anchor" href="#tFoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `HTMLTableSectionElement` representing the first `tfoot` that is a child of the element, or `null` if none is found. When set, if the object doesn't represent a `tfoot`, a `DOMException` with the `HierarchyRequestError` name is thrown. If a correct object is given, it is inserted in the tree immediately before the first element that is neither a `caption`, a `colgroup`, nor a `thead`, or as the last child if there is no such element, and the first `tfoot` that is a child of this element is removed from the tree, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tBodies"><code><span class="field-name">tBodies</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#tBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `HTMLCollection` containing all the `tbody` of the element. The `HTMLCollection` is live and is automatically updated when the `HTMLTableElement` changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rows"><code><span class="field-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#rows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `HTMLCollection` containing all the rows of the element, that is all `tr` that are a child of the element, or a child or one of its `thead`, `tbody` and `tfoot` children. The rows members of a `thead` appear first, in tree order, and those members of a `tbody` last, also in tree order. The `HTMLCollection` is live and is automatically updated when the `HTMLTableElement` changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing an enumerated value reflecting the `align` attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="border"><code><span class="field-name">border</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#border"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the width in pixels of the border of the table. It reflects the obsolete `border` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frame"><code><span class="field-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#frame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the type of the external borders of the table. It reflects the obsolete `frame` attribute and can take one of the following values: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"`, or `"border"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rules"><code><span class="field-name">rules</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#rules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the type of the internal borders of the table. It reflects the obsolete `rules` attribute and can take one of the following values: `"none"`, `"groups"`, `"rows"`, `"cols"`, or `"all"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="summary"><code><span class="field-name">summary</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#summary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing a description of the purpose or the structure of the table. It reflects the obsolete `summary` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the length in pixels or in percentage of the desired width fo the entire table. It reflects the obsolete `width` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bgColor"><code><span class="field-name">bgColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#bgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the background color of the cells. It reflects the obsolete `bgColor` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cellPadding"><code><span class="field-name">cellPadding</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#cellPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the width in pixels of the horizontal and vertical sapce between cell content and cell borders. It reflects the obsolete `cellpadding` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cellSpacing"><code><span class="field-name">cellSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#cellSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the width in pixels of the horizontal and vertical separation between cells. It reflects the obsolete `cellspacing` attribute.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createCaption"><code><span class="field-name">createCaption</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#createCaption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `HTMLElement` representing the first `caption` that is a child of the element. If none is found, a new one is created and inserted in the tree as the first child of the `table` element.
| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteCaption"><code><span class="field-name">deleteCaption</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteCaption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the first `caption` that is a child of the element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTHead"><code><span class="field-name">createTHead</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#createTHead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `HTMLElement` representing the first `thead` that is a child of the element. If none is found, a new one is created and inserted in the tree immediately before the first element that is neither a `caption`, nor a `colgroup`, or as the last child if there is no such element.
| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteTHead"><code><span class="field-name">deleteTHead</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteTHead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the first `thead` that is a child of the element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTFoot"><code><span class="field-name">createTFoot</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#createTFoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `HTMLElement` representing the first `tfoot` that is a child of the element. If none is found, a new one is created and inserted in the tree immediately before the first element that is neither a `caption`, a `colgroup`, nor a `thead`, or as the last child if there is no such element.
| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteTFoot"><code><span class="field-name">deleteTFoot</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteTFoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the first `tfoot` that is a child of the element.

<hr class="field-separator" />

<div class="signature field-method no-description" id="createTBody"><code><span class="field-name">createTBody</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#createTBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertRow"><code><span class="field-name">insertRow</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#insertRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `HTMLTableRowElement` representing a new row of the table. It inserts it in the rows collection immediately before the `tr` element at the given `index` position. If necessary a `tbody` is created. If the `index` is `-1`, the new row is appended to the collection. If the `index` is smaller than `-1` or greater than the number of rows in the collection, a `DOMException` with the value `IndexSizeError` is raised.

| Name | Type | Default |
|------|------|---------|
| `index` | [Int](/api-docs/clay-web/Int/) | `-1` |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteRow"><code><span class="field-name">deleteRow</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the row corresponding to the `index` given in parameter. If the `index` value is `-1` the last row is removed; if it smaller than `-1` or greater than the amount of rows in the collection, a `DOMException` with the value `IndexSizeError` is raised.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |


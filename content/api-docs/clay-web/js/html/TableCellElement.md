---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TableCellElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TableCellElement/
---

# TableCellElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.TableCellElement</strong> (extern class)</div>

The `HTMLTableCellElement` interface provides special properties and methods (beyond the regular `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header or data cells, in an HTML document.

Documentation [HTMLTableCellElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement></div>


## Instance Members

<div class="signature field-var has-description" id="colSpan"><code><span class="field-name">colSpan</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colSpan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An unsigned long integer indicating the number of columns this cell must span; this lets the cell occupy space across multiple columns of the table. It reflects the `colspan` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rowSpan"><code><span class="field-name">rowSpan</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rowSpan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An unsigned long integer indicating the number of rows this cell must span; this lets a cell occupy space across multiple rows of the table. It reflects the `rowspan` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="headers"><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMSettableTokenList` describing a list of `id` of `th` elements that represents headers associated with the cell. It reflects the `headers` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cellIndex"><code><span class="field-name">cellIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cellIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A long integer representing the cell's position in the `HTMLTableRowElement.cells` collection of the `tr` the cell is contained within. If the cell doesn't belong to a `tr`, it returns `-1`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="abbr"><code><span class="field-name">abbr</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#abbr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` which can be used on `th` elements (not on `td`), specifying an alternative label for the header cell.. This alternate label can be used in other contexts, such as when describing the headers that apply to a data cell. This is used to offer a shorter term for use by screen readers in particular, and is a valuable accessibility tool. Usually the value of `abbr` is an abbreviation or acronym, but can be any text that's appropriate contextually.

<hr class="field-separator" />

<div class="signature field-var no-description" id="scope"><code><span class="field-name">scope</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#scope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="axis"><code><span class="field-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#axis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ch"><code><span class="field-name">ch</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#ch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="chOff"><code><span class="field-name">chOff</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#chOff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="noWrap"><code><span class="field-name">noWrap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noWrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vAlign"><code><span class="field-name">vAlign</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#vAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bgColor"><code><span class="field-name">bgColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#bgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


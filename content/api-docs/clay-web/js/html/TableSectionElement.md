---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TableSectionElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TableSectionElement/
---

# TableSectionElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.TableSectionElement</strong> (extern class)</div>

The `HTMLTableSectionElement` interface provides special properties and methods (beyond the `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table.

Documentation [HTMLTableSectionElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement></div>


## Instance Members

<div class="signature field-var has-description" id="rows"><code><span class="field-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#rows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `HTMLCollection` containing the rows in the section. The `HTMLCollection` is live and is automatically updated when rows are added or removed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing an enumerated value reflecting the `align` attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ch"><code><span class="field-name">ch</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#ch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing one single chararcter. This character is the one to align all the cell of a column on. It reflects the `char` and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.

<hr class="field-separator" />

<div class="signature field-var has-description" id="chOff"><code><span class="field-name">chOff</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#chOff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableRowElement.ch`. This property was optional and was not very well supported.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vAlign"><code><span class="field-name">vAlign</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#vAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the `valign` attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertRow"><code><span class="field-name">insertRow</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#insertRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts a new row just before the given position in the section. If the given position is not given or is `-1`, it appends the row to the end of section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than `-1`, it raises a `DOMException` with the `IndexSizeError` value.

| Name | Type | Default |
|------|------|---------|
| `index` | [Int](/api-docs/clay-web/Int/) | `-1` |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteRow"><code><span class="field-name">deleteRow</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the cell at the given position in the section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than `0`, it raises a `DOMException` with the `IndexSizeError` value.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |


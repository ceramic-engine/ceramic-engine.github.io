---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CaretPosition
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CaretPosition/
---

# CaretPosition

<div class="type-hierarchy"><strong>js.html.CaretPosition</strong> (extern class)</div>

The `CaretPosition` interface represents the caret postion, an indicator for the text insertion point. You can get a `CaretPosition` using the `document.caretPositionFromPoint` method.

Documentation [CaretPosition](https://developer.mozilla.org/en-US/docs/Web/API/CaretPosition) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CaretPosition$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/CaretPosition></div>


## Instance Members

<div class="signature field-var has-description" id="offsetNode"><code><span class="field-name">offsetNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#offsetNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Node` containing the found node at the caret's position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offset"><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `long` representing the character offset in the caret position node.

<hr class="field-separator" />

<div class="signature field-method no-description" id="getClientRect"><code><span class="field-name">getClientRect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRect/" class="type-link">DOMRect</a></code><a class="header-anchor" href="#getClientRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [DOMRect](/api-docs/clay-web/js/html/DOMRect/) |


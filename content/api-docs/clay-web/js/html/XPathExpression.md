---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: XPathExpression
target: Clay (Web)
permalink: api-docs/clay-web/js/html/XPathExpression/
---

# XPathExpression

<div class="type-hierarchy"><strong>js.html.XPathExpression</strong> (extern class)</div>

An `XPathExpression` is a compiled XPath query returned from `document.createExpression()`. It has a method `evaluate()` which can be used to execute the compiled XPath.

Documentation [XPathExpression](https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression></div>


## Instance Members

<div class="signature field-method has-description" id="evaluate"><code><span class="field-name">evaluate</span><span class="parenthesis">(</span><span class="arg-name">contextNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/XPathResult/" class="type-link">XPathResult</a></code><a class="header-anchor" href="#evaluate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

provide a context node/document, `XPathResult` constant, and `XPathResult` to store the query or null to return a new XPathResult.

| Name | Type | Default |
|------|------|---------|
| `contextNode` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `type` | [Int](/api-docs/clay-web/Int/) | `0` |
| `result` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [XPathResult](/api-docs/clay-web/js/html/XPathResult/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Text
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Text/
---

# Text

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/CharacterData/">CharacterData</a> → <strong>js.html.Text</strong> (extern class) → <a href="/api-docs/clay-web/js/html/CDATASection/">CDATASection</a></div>

The `Text` interface represents the textual content of `Element` or `Attr`.  If an element has no markup within its content, it has a single child implementing `Text` that contains the element's text.  However, if the element contains markup, it is parsed into information items and `Text` nodes that form its children.

Documentation [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Text$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Text></div>


## Instance Members

<div class="signature field-var has-description" id="wholeText"><code><span class="field-name">wholeText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#wholeText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` containing the text of all `Text` nodes logically adjacent to this `Node`, concatenated in document order.

<hr class="field-separator" />

<div class="signature field-method has-description" id="splitText"><code><span class="field-name">splitText</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Text</a></code><a class="header-anchor" href="#splitText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Text](/api-docs/clay-web/js/html/Text/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertQuadFromNode"><code><span class="field-name">convertQuadFromNode</span><span class="parenthesis">(</span><span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuad/" class="type-link">DOMQuad</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="#" class="type-link">Text</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ConvertCoordinateOptions/" class="type-link">ConvertCoordinateOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuad/" class="type-link">DOMQuad</a></code><a class="header-anchor" href="#convertQuadFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `quad` | [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) | |
| `from` | [Text](/api-docs/clay-web/js/html/Text/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/)> | *(optional)* |

| Returns |
|---------|
| [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertRectFromNode"><code><span class="field-name">convertRectFromNode</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectReadOnly/" class="type-link">DOMRectReadOnly</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="#" class="type-link">Text</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ConvertCoordinateOptions/" class="type-link">ConvertCoordinateOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuad/" class="type-link">DOMQuad</a></code><a class="header-anchor" href="#convertRectFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `rect` | [DOMRectReadOnly](/api-docs/clay-web/js/html/DOMRectReadOnly/) | |
| `from` | [Text](/api-docs/clay-web/js/html/Text/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/)> | *(optional)* |

| Returns |
|---------|
| [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertPointFromNode"><code><span class="field-name">convertPointFromNode</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPointInit/" class="type-link">DOMPointInit</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="#" class="type-link">Text</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ConvertCoordinateOptions/" class="type-link">ConvertCoordinateOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPoint/" class="type-link">DOMPoint</a></code><a class="header-anchor" href="#convertPointFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `point` | [DOMPointInit](/api-docs/clay-web/js/html/DOMPointInit/) | |
| `from` | [Text](/api-docs/clay-web/js/html/Text/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/)> | *(optional)* |

| Returns |
|---------|
| [DOMPoint](/api-docs/clay-web/js/html/DOMPoint/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `data` | [String](/api-docs/clay-web/String/) | `""` |


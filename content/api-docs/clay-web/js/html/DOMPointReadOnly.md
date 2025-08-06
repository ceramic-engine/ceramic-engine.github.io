---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DOMPointReadOnly
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DOMPointReadOnly/
---

# DOMPointReadOnly

<div class="type-hierarchy"><strong>js.html.DOMPointReadOnly</strong> (extern class) → <a href="/api-docs/clay-web/js/html/DOMPoint/">DOMPoint</a></div>

The `DOMPointReadOnly` interface specifies the coordinate and perspective fields used by `DOMPoint` to define a 2D or 3D point in a coordinate system.

Documentation [DOMPointReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly></div>


## Static Members

<div class="signature field-method no-description" id="fromPoint"><code><span class="field-name">fromPoint</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">other</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/DOMPointInit/" class="type-link">DOMPointInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DOMPointReadOnly</a></code><a class="header-anchor" href="#fromPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `other` | [Null](/api-docs/clay-web/Null/)<[DOMPointInit](/api-docs/clay-web/js/html/DOMPointInit/)> | *(optional)* |

| Returns |
|---------|
| [DOMPointReadOnly](/api-docs/clay-web/js/html/DOMPointReadOnly/) |

## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The point's horizontal coordinate, `x`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The point's vertical coordinate, `y`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="z"><code><span class="field-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The point's depth coordinate, `z`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="w"><code><span class="field-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#w"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The point's perspective value, `w`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a JSON representation of the `DOMPointReadOnly` object.
| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `y` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `z` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `w` | [Float](/api-docs/clay-web/Float/) | `1.0` |


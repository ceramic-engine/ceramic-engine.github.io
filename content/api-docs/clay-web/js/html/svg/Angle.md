---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Angle
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/Angle/
---

# Angle

<div class="type-hierarchy"><strong>js.html.svg.Angle</strong> (extern class)</div>

The `SVGAngle` interface is used to represent a value that can be an `angle` or `number` value. An `SVGAngle` reflected through the `animVal` attribute is always read only.

Documentation [SVGAngle](https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle></div>


## Static Members

<div class="signature field-var has-description" id="SVG_ANGLETYPE_UNKNOWN"><code><span class="field-name">SVG_ANGLETYPE_UNKNOWN</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ANGLETYPE_UNKNOWN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Some unknown type of value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="SVG_ANGLETYPE_UNSPECIFIED"><code><span class="field-name">SVG_ANGLETYPE_UNSPECIFIED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ANGLETYPE_UNSPECIFIED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A unitless `number` interpreted as a value in degrees.

<hr class="field-separator" />

<div class="signature field-var has-description" id="SVG_ANGLETYPE_DEG"><code><span class="field-name">SVG_ANGLETYPE_DEG</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ANGLETYPE_DEG"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `angle` with a `deg` unit.

<hr class="field-separator" />

<div class="signature field-var has-description" id="SVG_ANGLETYPE_RAD"><code><span class="field-name">SVG_ANGLETYPE_RAD</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ANGLETYPE_RAD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `angle` with a `rad` unit.

<hr class="field-separator" />

<div class="signature field-var has-description" id="SVG_ANGLETYPE_GRAD"><code><span class="field-name">SVG_ANGLETYPE_GRAD</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ANGLETYPE_GRAD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `angle` with a `grad` unit.

## Instance Members

<div class="signature field-var has-description" id="unitType"><code><span class="field-name">unitType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unitType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of the value as specified by one of the `SVG_ANGLETYPE_*` constants defined on this interface.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The value as a floating point value, in user units. Setting this attribute will cause `valueInSpecifiedUnits` and `valueAsString` to be updated automatically to reflect this setting.

Exceptions on setting: a `DOMException` with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read only attribute or when the object itself is read only.

<hr class="field-separator" />

<div class="signature field-var has-description" id="valueInSpecifiedUnits"><code><span class="field-name">valueInSpecifiedUnits</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#valueInSpecifiedUnits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The value as a floating point value, in the units expressed by `unitType`. Setting this attribute will cause `value` and `valueAsString` to be updated automatically to reflect this setting.

Exceptions on setting: a `DOMException` with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read only attribute or when the object itself is read only.

<hr class="field-separator" />

<div class="signature field-var has-description" id="valueAsString"><code><span class="field-name">valueAsString</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#valueAsString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The value as a `DOMString` value, in the units expressed by `unitType`. Setting this attribute will cause `value`, `valueInSpecifiedUnits` and `unitType` to be updated automatically to reflect this setting.

Exceptions on setting:
a `DOMException` with code `SYNTAX_ERR` is raised if the assigned string cannot be parsed as a valid `angle`. a `DOMException` with code `NO_MODIFICATION_ALLOWED_ERR` is raised when the length corresponds to a read only attribute or when the object itself is read only.

<hr class="field-separator" />

<div class="signature field-method has-description" id="newValueSpecifiedUnits"><code><span class="field-name">newValueSpecifiedUnits</span><span class="parenthesis">(</span><span class="arg-name">unitType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valueInSpecifiedUnits</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#newValueSpecifiedUnits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `unitType` | [Int](/api-docs/clay-web/Int/) |
| `valueInSpecifiedUnits` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertToSpecifiedUnits"><code><span class="field-name">convertToSpecifiedUnits</span><span class="parenthesis">(</span><span class="arg-name">unitType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#convertToSpecifiedUnits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `unitType` | [Int](/api-docs/clay-web/Int/) |


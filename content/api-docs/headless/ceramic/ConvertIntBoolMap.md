---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertIntBoolMap
target: Headless
permalink: api-docs/headless/ceramic/ConvertIntBoolMap/
---

# ConvertIntBoolMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertIntBoolMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertIntBoolMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/ConvertField/">ConvertField</a></div>

Converter for IntBoolMap fields in fragments and data serialization.

This converter handles IntBoolMap instances by converting between
object representations and the specialized integer-to-boolean map.
Includes special handling for Spine plugin's hiddenSlots field where
slot names are converted to indices.

Note: The fieldToBasic conversion is currently not implemented and
will log a warning if used.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/headless/ceramic/IntBoolMap/">IntBoolMap</a>, <a href="/api-docs/headless/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a basic object to an IntBoolMap instance.

The basic object should have string keys (representing integers)
mapped to boolean values. Special handling is provided for Spine
plugin's hiddenSlots field where slot names are converted to indices.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/headless/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/headless/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | Assets instance for resource loading (unused)  |
| `basic` | [Dynamic](/api-docs/headless/Dynamic/) | Object with string keys and boolean values  |
| `done` | Function | Callback invoked with the converted IntBoolMap |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntBoolMap/" class="type-link">IntBoolMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert an IntBoolMap to a basic object for serialization.

WARNING: This method is not yet implemented and will log a warning.
The implementation should iterate through the map and create an
object with string keys representing the integer indices.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/headless/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/headless/String/) | The name of the field being converted  |
| `value` | [IntBoolMap](/api-docs/headless/ceramic/IntBoolMap/) | The IntBoolMap to convert  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | An empty object (method not implemented) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new IntBoolMap converter instance.


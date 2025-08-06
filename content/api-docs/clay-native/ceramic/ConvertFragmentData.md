---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertFragmentData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ConvertFragmentData/
---

# ConvertFragmentData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertFragmentData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertFragmentData</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a></div>

Converter for FragmentData fields in fragments and data serialization.

This converter provides a pass-through implementation for FragmentData,
as FragmentData is already a serializable format that doesn't require
conversion. The converter exists to maintain consistency in the fragment
system's field conversion architecture.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/clay-native/ceramic/FragmentData/">FragmentData</a>, <a href="/api-docs/clay-native/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pass through the basic value as FragmentData without conversion.

Since FragmentData is already in a serializable format, no
transformation is needed.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | Assets instance for resource loading (unused)  |
| `basic` | [Dynamic](/api-docs/clay-native/Dynamic/) | The FragmentData value to pass through  |
| `done` | Function | Callback invoked with the same FragmentData value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pass through the FragmentData value without conversion.

Since FragmentData is already in a serializable format, no
transformation is needed.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `value` | [FragmentData](/api-docs/clay-native/ceramic/FragmentData/) | The FragmentData value to pass through  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-native/Dynamic/) | The same FragmentData value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new fragment data converter instance.


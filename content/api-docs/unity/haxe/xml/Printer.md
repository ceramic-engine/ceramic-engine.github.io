---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Printer
target: Unity
permalink: api-docs/unity/haxe/xml/Printer/
---

# Printer

<div class="type-hierarchy"><strong>haxe.xml.Printer</strong> (Class)</div>

This class provides utility methods to convert Xml instances to
String representation.

## Static Members

<div class="signature field-method has-description" id="print"><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="arg-name">xml</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pretty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert `Xml` to string representation.

Set `pretty` to `true` to prettify the result.

| Name | Type | Default |
|------|------|---------|
| `xml` | [Xml](/api-docs/unity/Xml/) | |
| `pretty` | [Bool](/api-docs/unity/Bool/) | `false` |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-var no-description" id="output"><code><span class="field-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/StringBuf/" class="type-link">StringBuf</a></code><a class="header-anchor" href="#output"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pretty"><code><span class="field-name">pretty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pretty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="writeNode"><code><span class="field-name">writeNode</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="arg-name">tabs</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Xml](/api-docs/unity/Xml/) |
| `tabs` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="newline"><code><span class="field-name">newline</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#newline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasChildren"><code><span class="field-name">hasChildren</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasChildren"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Xml](/api-docs/unity/Xml/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">pretty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pretty` | [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


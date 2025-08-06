---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Parser
target: Unity
permalink: api-docs/unity/haxe/xml/Parser/
---

# Parser

<div class="type-hierarchy"><strong>haxe.xml.Parser</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses the String into an XML Document. Set strict parsing to true in order to enable a strict check of XML attributes and entities.

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/unity/String/) | |
| `strict` | [Bool](/api-docs/unity/Bool/) | `false` |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

## Private Members

<div class="signature field-var no-description" id="escapes"><code><span class="field-name">escapes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/StringMap/" class="type-link">haxe.ds.StringMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#escapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="doParse"><code><span class="field-name">doParse</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#doParse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/unity/String/) | |
| `strict` | [Bool](/api-docs/unity/Bool/) | |
| `p` | [Int](/api-docs/unity/Int/) | `0` |
| `parent` | [Xml](/api-docs/unity/Xml/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isValidChar"><code><span class="field-name">isValidChar</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


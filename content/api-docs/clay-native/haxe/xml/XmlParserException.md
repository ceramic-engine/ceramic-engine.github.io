---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: XmlParserException
target: Clay (Native)
permalink: api-docs/clay-native/haxe/xml/XmlParserException/
---

# XmlParserException

<div class="type-hierarchy"><strong>haxe.xml.XmlParserException</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

the XML parsing error message

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineNumber"><code><span class="field-name">lineNumber</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lineNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

the line number at which the XML parsing error occurred

<hr class="field-separator" />

<div class="signature field-var has-description" id="positionAtLine"><code><span class="field-name">positionAtLine</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#positionAtLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

the character position in the reported line at which the parsing error occurred

<hr class="field-separator" />

<div class="signature field-var has-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

the character position in the XML string at which the parsing error occurred

<hr class="field-separator" />

<div class="signature field-var has-description" id="xml"><code><span class="field-name">xml</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#xml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

the invalid XML string

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">xml</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `message` | [String](/api-docs/clay-native/String/) |
| `xml` | [String](/api-docs/clay-native/String/) |
| `position` | [Int](/api-docs/clay-native/Int/) |


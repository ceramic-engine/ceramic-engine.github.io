---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: CheckerTypes
target: Clay (Native)
permalink: api-docs/clay-native/hscript/CheckerTypes/
---

# CheckerTypes

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Checker.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.CheckerTypes</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="addXmlApi"><code><span class="field-name">addXmlApi</span><span class="parenthesis">(</span><span class="arg-name">api</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addXmlApi"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `api` | [Xml](/api-docs/clay-native/Xml/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defineClass"><code><span class="field-name">defineClass</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ct</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/hscript/CClass/" class="type-link">CClass</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/hscript/CClass/" class="type-link">CClass</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defineClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-native/String/) | |
| `ct` | [Null](/api-docs/clay-native/Null/)<[CClass](/api-docs/clay-native/hscript/CClass/)> | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[CClass](/api-docs/clay-native/hscript/CClass/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolve"><code><span class="field-name">resolve</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-native/String/) | |
| `args` | [Array](/api-docs/clay-native/Array/)<Anonymous> | *(optional)* |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="types"><code><span class="field-name">types</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#types"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="t_string"><code><span class="field-name">t_string</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#t_string"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="localParams"><code><span class="field-name">localParams</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#localParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="parser"><code><span class="field-name">parser</span><span class="operator">:</span> <a href="/api-docs/clay-native/hscript/Parser/" class="type-link">Parser</a></code><a class="header-anchor" href="#parser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addXmlType"><code><span class="field-name">addXmlType</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">todo</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addXmlType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | Anonymous |
| `todo` | [Array](/api-docs/clay-native/Array/)<Function> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addMeta"><code><span class="field-name">addMeta</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/TypeInfos/" class="type-link">haxe.rtti.TypeInfos</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/hscript/CNamedType/" class="type-link">CNamedType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addMeta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `src` | [haxe.rtti.TypeInfos](/api-docs/clay-native/haxe/rtti/TypeInfos/) |
| `to` | [CNamedType](/api-docs/clay-native/hscript/CNamedType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeXmlType"><code><span class="field-name">makeXmlType</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#makeXmlType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getType"><code><span class="field-name">getType</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#getType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-native/String/) | |
| `args` | [Array](/api-docs/clay-native/Array/)<Anonymous> | *(optional)* |

| Returns |
|---------|
| Anonymous |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | hscript.Checker |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: XmlParser
target: Clay (Native)
permalink: api-docs/clay-native/haxe/rtti/XmlParser/
---

# XmlParser

<div class="type-hierarchy"><strong>haxe.rtti.XmlParser</strong> (Class)</div>

XmlParser processes the runtime type information (RTTI) which
is stored as a XML string in a static field `__rtti`.

<div class="see"><strong>See:</strong> <https://haxe.org/manual/cr-rtti.html></div>


## Instance Members

<div class="signature field-var no-description" id="root"><code><span class="field-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/TypeRoot/" class="type-link">TypeRoot</a></code><a class="header-anchor" href="#root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="processElement"><code><span class="field-name">processElement</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#processElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Xml](/api-docs/clay-native/Xml/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="curplatform"><code><span class="field-name">curplatform</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#curplatform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="mkPath"><code><span class="field-name">mkPath</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/Path/" class="type-link">Path</a></code><a class="header-anchor" href="#mkPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Path](/api-docs/clay-native/haxe/rtti/Path/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mkTypeParams"><code><span class="field-name">mkTypeParams</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/TypeParams/" class="type-link">TypeParams</a></code><a class="header-anchor" href="#mkTypeParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [TypeParams](/api-docs/clay-native/haxe/rtti/TypeParams/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mkRights"><code><span class="field-name">mkRights</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#mkRights"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `r` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xerror"><code><span class="field-name">xerror</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#xerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xmeta"><code><span class="field-name">xmeta</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/MetaData/" class="type-link">MetaData</a></code><a class="header-anchor" href="#xmeta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [MetaData](/api-docs/clay-native/haxe/rtti/MetaData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xoverloads"><code><span class="field-name">xoverloads</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#xoverloads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[ClassField](/api-docs/clay-native/haxe/rtti/ClassField/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xpath"><code><span class="field-name">xpath</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/PathParams/" class="type-link">PathParams</a></code><a class="header-anchor" href="#xpath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [PathParams](/api-docs/clay-native/haxe/rtti/PathParams/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xclass"><code><span class="field-name">xclass</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/Classdef/" class="type-link">Classdef</a></code><a class="header-anchor" href="#xclass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Classdef](/api-docs/clay-native/haxe/rtti/Classdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xclassfield"><code><span class="field-name">xclassfield</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defPublic</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/ClassField/" class="type-link">ClassField</a></code><a class="header-anchor" href="#xclassfield"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) | |
| `defPublic` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [ClassField](/api-docs/clay-native/haxe/rtti/ClassField/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xenum"><code><span class="field-name">xenum</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/Enumdef/" class="type-link">Enumdef</a></code><a class="header-anchor" href="#xenum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Enumdef](/api-docs/clay-native/haxe/rtti/Enumdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xenumfield"><code><span class="field-name">xenumfield</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/EnumField/" class="type-link">EnumField</a></code><a class="header-anchor" href="#xenumfield"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [EnumField](/api-docs/clay-native/haxe/rtti/EnumField/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xabstract"><code><span class="field-name">xabstract</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/Abstractdef/" class="type-link">Abstractdef</a></code><a class="header-anchor" href="#xabstract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Abstractdef](/api-docs/clay-native/haxe/rtti/Abstractdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xtypedef"><code><span class="field-name">xtypedef</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/rtti/Typedef/" class="type-link">Typedef</a></code><a class="header-anchor" href="#xtypedef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Typedef](/api-docs/clay-native/haxe/rtti/Typedef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xtype"><code><span class="field-name">xtype</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#xtype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xtypeparams"><code><span class="field-name">xtypeparams</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#xtypeparams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/clay-native/haxe/xml/Access/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<Anonymous> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defplat"><code><span class="field-name">defplat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defplat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |


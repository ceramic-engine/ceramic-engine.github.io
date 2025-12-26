---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: XmlParser
target: Unity
permalink: api-docs/unity/haxe/rtti/XmlParser/
---

# XmlParser

<div class="type-hierarchy"><strong>haxe.rtti.XmlParser</strong> (Class)</div>

XmlParser processes the runtime type information (RTTI) which
is stored as a XML string in a static field `__rtti`.

<div class="see"><strong>See:</strong> <https://haxe.org/manual/cr-rtti.html></div>


## Instance Members

<div class="signature field-var no-description" id="root"><code><span class="field-name">root</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/TypeRoot/" class="type-link">TypeRoot</a></code><a class="header-anchor" href="#root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="process"><code><span class="field-name">process</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="arg-name">platform</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Xml](/api-docs/unity/Xml/) |
| `platform` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="newField"><code><span class="field-name">newField</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Classdef/" class="type-link">Classdef</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#newField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Classdef](/api-docs/unity/haxe/rtti/Classdef/) |
| `f` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="processElement"><code><span class="field-name">processElement</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#processElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Xml](/api-docs/unity/Xml/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="curplatform"><code><span class="field-name">curplatform</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#curplatform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeRights"><code><span class="field-name">mergeRights</span><span class="parenthesis">(</span><span class="arg-name">f1</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="operator">,</span> <span class="arg-name">f2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeRights"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f1` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |
| `f2` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeDoc"><code><span class="field-name">mergeDoc</span><span class="parenthesis">(</span><span class="arg-name">f1</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="operator">,</span> <span class="arg-name">f2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeDoc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f1` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |
| `f2` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeFields"><code><span class="field-name">mergeFields</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="operator">,</span> <span class="arg-name">f2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |
| `f2` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeClasses"><code><span class="field-name">mergeClasses</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Classdef/" class="type-link">Classdef</a><span class="operator">,</span> <span class="arg-name">c2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Classdef/" class="type-link">Classdef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeClasses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Classdef](/api-docs/unity/haxe/rtti/Classdef/) |
| `c2` | [Classdef](/api-docs/unity/haxe/rtti/Classdef/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeEnums"><code><span class="field-name">mergeEnums</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Enumdef/" class="type-link">Enumdef</a><span class="operator">,</span> <span class="arg-name">e2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Enumdef/" class="type-link">Enumdef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeEnums"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Enumdef](/api-docs/unity/haxe/rtti/Enumdef/) |
| `e2` | [Enumdef](/api-docs/unity/haxe/rtti/Enumdef/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeTypedefs"><code><span class="field-name">mergeTypedefs</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Typedef/" class="type-link">Typedef</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Typedef/" class="type-link">Typedef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeTypedefs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | [Typedef](/api-docs/unity/haxe/rtti/Typedef/) |
| `t2` | [Typedef](/api-docs/unity/haxe/rtti/Typedef/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeAbstracts"><code><span class="field-name">mergeAbstracts</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Abstractdef/" class="type-link">Abstractdef</a><span class="operator">,</span> <span class="arg-name">a2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Abstractdef/" class="type-link">Abstractdef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeAbstracts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Abstractdef](/api-docs/unity/haxe/rtti/Abstractdef/) |
| `a2` | [Abstractdef](/api-docs/unity/haxe/rtti/Abstractdef/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="merge"><code><span class="field-name">merge</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#merge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mkPath"><code><span class="field-name">mkPath</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Path/" class="type-link">Path</a></code><a class="header-anchor" href="#mkPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Path](/api-docs/unity/haxe/rtti/Path/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mkTypeParams"><code><span class="field-name">mkTypeParams</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/TypeParams/" class="type-link">TypeParams</a></code><a class="header-anchor" href="#mkTypeParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [TypeParams](/api-docs/unity/haxe/rtti/TypeParams/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mkRights"><code><span class="field-name">mkRights</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#mkRights"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `r` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xerror"><code><span class="field-name">xerror</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#xerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xroot"><code><span class="field-name">xroot</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#xroot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xmeta"><code><span class="field-name">xmeta</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/MetaData/" class="type-link">MetaData</a></code><a class="header-anchor" href="#xmeta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [MetaData](/api-docs/unity/haxe/rtti/MetaData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xoverloads"><code><span class="field-name">xoverloads</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#xoverloads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[ClassField](/api-docs/unity/haxe/rtti/ClassField/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xpath"><code><span class="field-name">xpath</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/PathParams/" class="type-link">PathParams</a></code><a class="header-anchor" href="#xpath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [PathParams](/api-docs/unity/haxe/rtti/PathParams/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xclass"><code><span class="field-name">xclass</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Classdef/" class="type-link">Classdef</a></code><a class="header-anchor" href="#xclass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Classdef](/api-docs/unity/haxe/rtti/Classdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xclassfield"><code><span class="field-name">xclassfield</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defPublic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a></code><a class="header-anchor" href="#xclassfield"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) | |
| `defPublic` | [Bool](/api-docs/unity/Bool/) | `false` |

| Returns |
|---------|
| [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xenum"><code><span class="field-name">xenum</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Enumdef/" class="type-link">Enumdef</a></code><a class="header-anchor" href="#xenum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Enumdef](/api-docs/unity/haxe/rtti/Enumdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xenumfield"><code><span class="field-name">xenumfield</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/EnumField/" class="type-link">EnumField</a></code><a class="header-anchor" href="#xenumfield"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [EnumField](/api-docs/unity/haxe/rtti/EnumField/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xabstract"><code><span class="field-name">xabstract</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Abstractdef/" class="type-link">Abstractdef</a></code><a class="header-anchor" href="#xabstract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Abstractdef](/api-docs/unity/haxe/rtti/Abstractdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xtypedef"><code><span class="field-name">xtypedef</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/Typedef/" class="type-link">Typedef</a></code><a class="header-anchor" href="#xtypedef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Typedef](/api-docs/unity/haxe/rtti/Typedef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xtype"><code><span class="field-name">xtype</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#xtype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="xtypeparams"><code><span class="field-name">xtypeparams</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/xml/Access/" class="type-link">haxe.xml.Access</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#xtypeparams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [haxe.xml.Access](/api-docs/unity/haxe/xml/Access/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Anonymous> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defplat"><code><span class="field-name">defplat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defplat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


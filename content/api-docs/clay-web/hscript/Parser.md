---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: Parser
target: Clay (Web)
permalink: api-docs/clay-web/hscript/Parser/
---

# Parser

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Parser.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.Parser</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="line"><code><span class="field-name">line</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#line"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="opChars"><code><span class="field-name">opChars</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#opChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="identChars"><code><span class="field-name">identChars</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="opPriority"><code><span class="field-name">opPriority</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#opPriority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="opRightAssoc"><code><span class="field-name">opRightAssoc</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#opRightAssoc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="preprocesorValues"><code><span class="field-name">preprocesorValues</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#preprocesorValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

allows to check for #if / #else in code

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowJSON"><code><span class="field-name">allowJSON</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

activate JSON compatiblity

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowTypes"><code><span class="field-name">allowTypes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

allow types declarations

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowMetadata"><code><span class="field-name">allowMetadata</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowMetadata"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

allow haxe metadata declarations

<hr class="field-separator" />

<div class="signature field-var has-description" id="resumeErrors"><code><span class="field-name">resumeErrors</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resumeErrors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

resume from parsing errors (when parsing incomplete code, during completion for example)

<hr class="field-separator" />

<div class="signature field-method no-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">err</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">pmin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pmax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `err` | Anonymous |
| `pmin` | [Int](/api-docs/clay-web/Int/) |
| `pmax` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidChar"><code><span class="field-name">invalidChar</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseString"><code><span class="field-name">parseString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"hscript"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#parseString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `s` | [String](/api-docs/clay-web/String/) | |
| `origin` | [String](/api-docs/clay-web/String/) | `"hscript"` |
| `position` | [Int](/api-docs/clay-web/Int/) | `0` |

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseModule"><code><span class="field-name">parseModule</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"hscript"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `content` | [String](/api-docs/clay-web/String/) | |
| `origin` | [String](/api-docs/clay-web/String/) | `"hscript"` |
| `position` | [Int](/api-docs/clay-web/Int/) | `0` |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<Anonymous> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readPos"><code><span class="field-name">readPos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offset"><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentPos"><code><span class="field-name">currentPos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#currentPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="char"><code><span class="field-name">char</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#char"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ops"><code><span class="field-name">ops</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ops"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="idents"><code><span class="field-name">idents</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#idents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uid"><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tokenMin"><code><span class="field-name">tokenMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tokenMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tokenMax"><code><span class="field-name">tokenMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tokenMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oldTokenMin"><code><span class="field-name">oldTokenMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#oldTokenMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oldTokenMax"><code><span class="field-name">oldTokenMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#oldTokenMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tokens"><code><span class="field-name">tokens</span><span class="operator">:</span> <a href="/api-docs/clay-web/List/" class="type-link">List</a></code><a class="header-anchor" href="#tokens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="preprocStack"><code><span class="field-name">preprocStack</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#preprocStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initParser"><code><span class="field-name">initParser</span><span class="parenthesis">(</span><span class="arg-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initParser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `origin` | [String](/api-docs/clay-web/String/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unexpected"><code><span class="field-name">unexpected</span><span class="parenthesis">(</span><span class="arg-name">tk</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#unexpected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tk` | Anonymous |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">tk</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tk` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensure"><code><span class="field-name">ensure</span><span class="parenthesis">(</span><span class="arg-name">tk</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tk` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureToken"><code><span class="field-name">ensureToken</span><span class="parenthesis">(</span><span class="arg-name">tk</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tk` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="maybe"><code><span class="field-name">maybe</span><span class="parenthesis">(</span><span class="arg-name">tk</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#maybe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tk` | Anonymous |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIdent"><code><span class="field-name">getIdent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getIdent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="expr"><code><span class="field-name">expr</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#expr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pmin"><code><span class="field-name">pmin</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pmin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pmax"><code><span class="field-name">pmax</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pmax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mk"><code><span class="field-name">mk</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pmin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pmax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#mk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `e` | [Null](/api-docs/clay-web/Null/)<Anonymous> | |
| `pmin` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `pmax` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isBlock"><code><span class="field-name">isBlock</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseFullExpr"><code><span class="field-name">parseFullExpr</span><span class="parenthesis">(</span><span class="arg-name">exprs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#parseFullExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `exprs` | [Array](/api-docs/clay-web/Array/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseObject"><code><span class="field-name">parseObject</span><span class="parenthesis">(</span><span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#parseObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p1` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> |

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseExpr"><code><span class="field-name">parseExpr</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseLambda"><code><span class="field-name">parseLambda</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Argument/" class="type-link">Argument</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pmin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#parseLambda"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `args` | [Array](/api-docs/clay-web/Array/)<[Argument](/api-docs/clay-web/hscript/Argument/)> |
| `pmin` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> |

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseMetaArgs"><code><span class="field-name">parseMetaArgs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseMetaArgs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Array](/api-docs/clay-web/Array/)<[Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)>>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mapCompr"><code><span class="field-name">mapCompr</span><span class="parenthesis">(</span><span class="arg-name">tmp</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mapCompr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tmp` | [String](/api-docs/clay-web/String/) |
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeUnop"><code><span class="field-name">makeUnop</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#makeUnop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `e` | [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeBinop"><code><span class="field-name">makeBinop</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">e1</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#makeBinop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `e1` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseStructure"><code><span class="field-name">parseStructure</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseStructure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseExprNext"><code><span class="field-name">parseExprNext</span><span class="parenthesis">(</span><span class="arg-name">e1</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#parseExprNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e1` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseFunctionArgs"><code><span class="field-name">parseFunctionArgs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Argument/" class="type-link">Argument</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseFunctionArgs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Argument](/api-docs/clay-web/hscript/Argument/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseFunctionDecl"><code><span class="field-name">parseFunctionDecl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#parseFunctionDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parsePath"><code><span class="field-name">parsePath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parsePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseType"><code><span class="field-name">parseType</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#parseType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseTypeNext"><code><span class="field-name">parseTypeNext</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#parseTypeNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseExprList"><code><span class="field-name">parseExprList</span><span class="parenthesis">(</span><span class="arg-name">etk</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseExprList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `etk` | Anonymous |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Null](/api-docs/clay-web/Null/)<[Expr](/api-docs/clay-web/hscript/Expr/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseMetadata"><code><span class="field-name">parseMetadata</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Metadata/" class="type-link">Metadata</a></code><a class="header-anchor" href="#parseMetadata"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Metadata](/api-docs/clay-web/hscript/Metadata/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseParams"><code><span class="field-name">parseParams</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#parseParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseModuleDecl"><code><span class="field-name">parseModuleDecl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#parseModuleDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseField"><code><span class="field-name">parseField</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/FieldDecl/" class="type-link">FieldDecl</a></code><a class="header-anchor" href="#parseField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FieldDecl](/api-docs/clay-web/hscript/FieldDecl/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readChar"><code><span class="field-name">readChar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readString"><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">until</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `until` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="token"><code><span class="field-name">token</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#token"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="preprocValue"><code><span class="field-name">preprocValue</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#preprocValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parsePreproCond"><code><span class="field-name">parsePreproCond</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#parsePreproCond"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="evalPreproCond"><code><span class="field-name">evalPreproCond</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#evalPreproCond"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="preprocess"><code><span class="field-name">preprocess</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#preprocess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="skipTokens"><code><span class="field-name">skipTokens</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#skipTokens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tokenComment"><code><span class="field-name">tokenComment</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">char</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#tokenComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `char` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="constString"><code><span class="field-name">constString</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#constString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tokenString"><code><span class="field-name">tokenString</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#tokenString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |


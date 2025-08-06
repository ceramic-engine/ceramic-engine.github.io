---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: Interp
target: Clay (Web)
permalink: api-docs/clay-web/hscript/Interp/
---

# Interp

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Interp.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.Interp</strong> (Class) → <a href="/api-docs/clay-web/ceramic/Interp/">ceramic.Interp</a></div>

## Instance Members

<div class="signature field-var no-description" id="variables"><code><span class="field-name">variables</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#variables"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="posInfos"><code><span class="field-name">posInfos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/PosInfos/" class="type-link">haxe.PosInfos</a></code><a class="header-anchor" href="#posInfos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.PosInfos](/api-docs/clay-web/haxe/PosInfos/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="execute"><code><span class="field-name">execute</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#execute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `expr` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="expr"><code><span class="field-name">expr</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#expr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="locals"><code><span class="field-name">locals</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#locals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="binops"><code><span class="field-name">binops</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#binops"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="depth"><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="inTry"><code><span class="field-name">inTry</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inTry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="declared"><code><span class="field-name">declared</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#declared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="returnValue"><code><span class="field-name">returnValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#returnValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="curExpr"><code><span class="field-name">curExpr</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a></code><a class="header-anchor" href="#curExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resetVariables"><code><span class="field-name">resetVariables</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetVariables"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initOps"><code><span class="field-name">initOps</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initOps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setVar"><code><span class="field-name">setVar</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#setVar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="assign"><code><span class="field-name">assign</span><span class="parenthesis">(</span><span class="arg-name">e1</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">e2</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#assign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e1` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `e2` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="assignOp"><code><span class="field-name">assignOp</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fop</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assignOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `fop` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="evalAssignOp"><code><span class="field-name">evalAssignOp</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fop</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">e1</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">e2</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#evalAssignOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [String](/api-docs/clay-web/String/) |
| `fop` | Function |
| `e1` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `e2` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="increment"><code><span class="field-name">increment</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#increment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `prefix` | [Bool](/api-docs/clay-web/Bool/) |
| `delta` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="exprReturn"><code><span class="field-name">exprReturn</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#exprReturn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="duplicate"><code><span class="field-name">duplicate</span><span class="parenthesis">(</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/ds/Map/" class="type-link">haxe.ds.Map</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">duplicate.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#duplicate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `h` | [Map](/api-docs/clay-web/Map/) |

| Returns |
|---------|
| [haxe.ds.Map](/api-docs/clay-web/haxe/ds/Map/)<[String](/api-docs/clay-web/String/), [Null](/api-docs/clay-web/Null/)<duplicate.T>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="restore"><code><span class="field-name">restore</span><span class="parenthesis">(</span><span class="arg-name">old</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#restore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `old` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rethrow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `e` | Anonymous | |
| `rethrow` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rethrow"><code><span class="field-name">rethrow</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rethrow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolve"><code><span class="field-name">resolve</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doWhileLoop"><code><span class="field-name">doWhileLoop</span><span class="parenthesis">(</span><span class="arg-name">econd</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doWhileLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `econd` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="whileLoop"><code><span class="field-name">whileLoop</span><span class="parenthesis">(</span><span class="arg-name">econd</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#whileLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `econd` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeIterator"><code><span class="field-name">makeIterator</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#makeIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Iterator](/api-docs/clay-web/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="forLoop"><code><span class="field-name">forLoop</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">it</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `n` | [String](/api-docs/clay-web/String/) |
| `it` | [Expr](/api-docs/clay-web/hscript/Expr/) |
| `e` | [Expr](/api-docs/clay-web/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loopRun"><code><span class="field-name">loopRun</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loopRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | Function |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMap"><code><span class="field-name">isMap</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMapValue"><code><span class="field-name">getMapValue</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getMapValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setMapValue"><code><span class="field-name">setMapValue</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMapValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeMap"><code><span class="field-name">makeMap</span><span class="parenthesis">(</span><span class="arg-name">keys</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#makeMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keys` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |
| `values` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `f` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `f` | [String](/api-docs/clay-web/String/) |
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fcall"><code><span class="field-name">fcall</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#fcall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `f` | [String](/api-docs/clay-web/String/) |
| `args` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="call"><code><span class="field-name">call</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#call"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `f` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `args` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="cnew"><code><span class="field-name">cnew</span><span class="parenthesis">(</span><span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#cnew"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cl` | [String](/api-docs/clay-web/String/) |
| `args` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |


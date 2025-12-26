---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Equal
target: Unity
permalink: api-docs/unity/loreline/Equal/
---

# Equal

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Equal.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Equal</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="equal"><code><span class="field-name">equal</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deep (recursive) equality check between two values.
Supports arrays, StringMap, IntMap and objects with fields.


| Name | Type | Description |
|------|------|-------------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) | Optional interpreter instance  |
| `a` | [Dynamic](/api-docs/unity/Dynamic/) | First value to compare  |
| `b` | [Dynamic](/api-docs/unity/Dynamic/) | Second value to compare  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Bool True if values are deeply equal |

<hr class="field-separator" />

<div class="signature field-method no-description" id="objectFieldsEqual"><code><span class="field-name">objectFieldsEqual</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#objectFieldsEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `a` | [Any](/api-docs/unity/Any/) |
| `b` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayEqual"><code><span class="field-name">arrayEqual</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#arrayEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `a` | [Any](/api-docs/unity/Any/) |
| `b` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stringMapEqual"><code><span class="field-name">stringMapEqual</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/StringMap/" class="type-link">haxe.ds.StringMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/StringMap/" class="type-link">haxe.ds.StringMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stringMapEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `a` | [haxe.ds.StringMap](/api-docs/unity/haxe/ds/StringMap/)<[Any](/api-docs/unity/Any/)> |
| `b` | [haxe.ds.StringMap](/api-docs/unity/haxe/ds/StringMap/)<[Any](/api-docs/unity/Any/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="intMapEqual"><code><span class="field-name">intMapEqual</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intMapEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `a` | [haxe.ds.IntMap](/api-docs/unity/haxe/ds/IntMap/)<[Any](/api-docs/unity/Any/)> |
| `b` | [haxe.ds.IntMap](/api-docs/unity/haxe/ds/IntMap/)<[Any](/api-docs/unity/Any/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


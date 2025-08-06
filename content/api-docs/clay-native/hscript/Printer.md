---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: Printer
target: Clay (Native)
permalink: api-docs/clay-native/hscript/Printer/
---

# Printer

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Printer.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.Printer</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-native/hscript/Expr/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="errorToString"><code><span class="field-name">errorToString</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/hscript/Error/" class="type-link">Error</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#errorToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Error](/api-docs/clay-native/hscript/Error/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Instance Members

<div class="signature field-method no-description" id="exprToString"><code><span class="field-name">exprToString</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#exprToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-native/hscript/Expr/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="typeToString"><code><span class="field-name">typeToString</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#typeToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="buf"><code><span class="field-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/StringBuf/" class="type-link">StringBuf</a></code><a class="header-anchor" href="#buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tabs"><code><span class="field-name">tabs</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#tabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <span class="type-name">add.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | add.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="type"><code><span class="field-name">type</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addType"><code><span class="field-name">addType</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="expr"><code><span class="field-name">expr</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/hscript/Expr/" class="type-link">Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#expr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Expr](/api-docs/clay-native/hscript/Expr/) |


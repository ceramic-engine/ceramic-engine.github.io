---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Adler32
target: Clay (Web)
permalink: api-docs/clay-web/haxe/crypto/Adler32/
---

# Adler32

<div class="type-hierarchy"><strong>haxe.crypto.Adler32</strong> (Class)</div>

Calculates the Adler32 of the given Bytes.

## Static Members

<div class="signature field-method no-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Input/" class="type-link">haxe.io.Input</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Adler32</a></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [haxe.io.Input](/api-docs/clay-web/haxe/io/Input/) |

| Returns |
|---------|
| [Adler32](/api-docs/clay-web/haxe/crypto/Adler32/) |

## Instance Members

<div class="signature field-method no-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |
| `len` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="equals"><code><span class="field-name">equals</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Adler32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Adler32](/api-docs/clay-web/haxe/crypto/Adler32/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="a1"><code><span class="field-name">a1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#a1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="a2"><code><span class="field-name">a2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#a2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


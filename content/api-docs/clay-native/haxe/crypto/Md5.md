---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Md5
target: Clay (Native)
permalink: api-docs/clay-native/haxe/crypto/Md5/
---

# Md5

<div class="type-hierarchy"><strong>haxe.crypto.Md5</strong> (Class)</div>

Creates a MD5 of a String.

## Static Members

<div class="signature field-method no-description" id="encode"><code><span class="field-name">encode</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#encode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="make"><code><span class="field-name">make</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#make"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

## Private Members

<div class="signature field-method no-description" id="bytes2blks"><code><span class="field-name">bytes2blks</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bytes2blks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="str2blks"><code><span class="field-name">str2blks</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#str2blks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bitOR"><code><span class="field-name">bitOR</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bitOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bitXOR"><code><span class="field-name">bitXOR</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bitXOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bitAND"><code><span class="field-name">bitAND</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bitAND"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addme"><code><span class="field-name">addme</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#addme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hex"><code><span class="field-name">hex</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#hex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rol"><code><span class="field-name">rol</span><span class="parenthesis">(</span><span class="arg-name">num</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cnt</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `num` | [Int](/api-docs/clay-native/Int/) |
| `cnt` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="cmn"><code><span class="field-name">cmn</span><span class="parenthesis">(</span><span class="arg-name">q</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cmn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `q` | [Int](/api-docs/clay-native/Int/) |
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ff"><code><span class="field-name">ff</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |
| `c` | [Int](/api-docs/clay-native/Int/) |
| `d` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gg"><code><span class="field-name">gg</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |
| `c` | [Int](/api-docs/clay-native/Int/) |
| `d` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hh"><code><span class="field-name">hh</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |
| `c` | [Int](/api-docs/clay-native/Int/) |
| `d` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ii"><code><span class="field-name">ii</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ii"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |
| `c` | [Int](/api-docs/clay-native/Int/) |
| `d` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doEncode"><code><span class="field-name">doEncode</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#doEncode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


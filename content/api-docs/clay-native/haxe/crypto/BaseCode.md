---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BaseCode
target: Clay (Native)
permalink: api-docs/clay-native/haxe/crypto/BaseCode/
---

# BaseCode

<div class="type-hierarchy"><strong>haxe.crypto.BaseCode</strong> (Class)</div>

Allows one to encode/decode String and bytes using a power of two base dictionary.

## Instance Members

<div class="signature field-method no-description" id="decodeBytes"><code><span class="field-name">decodeBytes</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#decodeBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `base` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

## Private Members

<div class="signature field-var no-description" id="base"><code><span class="field-name">base</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#base"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nbits"><code><span class="field-name">nbits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nbits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tbl"><code><span class="field-name">tbl</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tbl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initTable"><code><span class="field-name">initTable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initTable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


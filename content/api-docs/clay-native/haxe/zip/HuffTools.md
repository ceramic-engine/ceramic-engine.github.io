---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HuffTools
target: Clay (Native)
permalink: api-docs/clay-native/haxe/zip/HuffTools/
---

# HuffTools

<div class="type-hierarchy"><strong>haxe.zip.HuffTools</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="make"><code><span class="field-name">make</span><span class="parenthesis">(</span><span class="arg-name">lengths</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nlengths</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxbits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#make"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `lengths` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `nlengths` | [Int](/api-docs/clay-native/Int/) |
| `maxbits` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description" id="treeDepth"><code><span class="field-name">treeDepth</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#treeDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeCompress"><code><span class="field-name">treeCompress</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#treeCompress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeWalk"><code><span class="field-name">treeWalk</span><span class="parenthesis">(</span><span class="arg-name">table</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#treeWalk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `table` | [Array](/api-docs/clay-native/Array/)<Anonymous> |
| `p` | [Int](/api-docs/clay-native/Int/) |
| `cd` | [Int](/api-docs/clay-native/Int/) |
| `d` | [Int](/api-docs/clay-native/Int/) |
| `t` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeMake"><code><span class="field-name">treeMake</span><span class="parenthesis">(</span><span class="arg-name">bits</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">maxbits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#treeMake"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bits` | [haxe.ds.IntMap](/api-docs/clay-native/haxe/ds/IntMap/)<[Int](/api-docs/clay-native/Int/)> |
| `maxbits` | [Int](/api-docs/clay-native/Int/) |
| `v` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| Anonymous |


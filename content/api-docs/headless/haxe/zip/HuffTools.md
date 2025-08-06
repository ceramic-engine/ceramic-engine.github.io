---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HuffTools
target: Headless
permalink: api-docs/headless/haxe/zip/HuffTools/
---

# HuffTools

<div class="type-hierarchy"><strong>haxe.zip.HuffTools</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="make"><code><span class="field-name">make</span><span class="parenthesis">(</span><span class="arg-name">lengths</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nlengths</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxbits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#make"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `lengths` | [Array](/api-docs/headless/Array/)<[Int](/api-docs/headless/Int/)> |
| `pos` | [Int](/api-docs/headless/Int/) |
| `nlengths` | [Int](/api-docs/headless/Int/) |
| `maxbits` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description" id="treeDepth"><code><span class="field-name">treeDepth</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#treeDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeCompress"><code><span class="field-name">treeCompress</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#treeCompress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeWalk"><code><span class="field-name">treeWalk</span><span class="parenthesis">(</span><span class="arg-name">table</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#treeWalk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `table` | [Array](/api-docs/headless/Array/)<Anonymous> |
| `p` | [Int](/api-docs/headless/Int/) |
| `cd` | [Int](/api-docs/headless/Int/) |
| `d` | [Int](/api-docs/headless/Int/) |
| `t` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeMake"><code><span class="field-name">treeMake</span><span class="parenthesis">(</span><span class="arg-name">bits</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">maxbits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#treeMake"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bits` | [haxe.ds.IntMap](/api-docs/headless/haxe/ds/IntMap/)<[Int](/api-docs/headless/Int/)> |
| `maxbits` | [Int](/api-docs/headless/Int/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `len` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| Anonymous |


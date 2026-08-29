---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: OutRec
target: Clay (Native)
permalink: api-docs/clay-native/clipper/OutRec/
---

# OutRec

<div class="type-hierarchy"><strong>clipper.OutRec</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">OutRec</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [OutRec](/api-docs/clay-native/clipper/OutRec/) |

## Instance Members

<div class="signature field-var no-description" id="idx"><code><span class="field-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#idx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="outPtCount"><code><span class="field-name">outPtCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#outPtCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="owner"><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">OutRec</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="frontEdge"><code><span class="field-name">frontEdge</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#frontEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="backEdge"><code><span class="field-name">backEdge</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#backEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pts"><code><span class="field-name">pts</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="polypath"><code><span class="field-name">polypath</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/PolyPathBase/" class="type-link">PolyPathBase</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#polypath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bounds"><code><span class="field-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isOpen"><code><span class="field-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="splits"><code><span class="field-name">splits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#splits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="recursiveSplit"><code><span class="field-name">recursiveSplit</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">OutRec</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#recursiveSplit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


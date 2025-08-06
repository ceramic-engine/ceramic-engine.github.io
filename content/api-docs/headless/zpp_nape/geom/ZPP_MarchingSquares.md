---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_MarchingSquares
target: Headless
permalink: api-docs/headless/zpp_nape/geom/ZPP_MarchingSquares/
---

# ZPP_MarchingSquares

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/MarchingSquares.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_MarchingSquares</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="look_march"><div class="plugin-name">nape</div><code><span class="field-name">look_march</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#look_march"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="run"><div class="plugin-name">nape</div><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="arg-name">iso</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/IsoFunctionDef/" class="type-link">nape.geom.IsoFunctionDef</a><span class="operator">,</span> <span class="arg-name">bx0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">by0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bx1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">by1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cell</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">combine</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/GeomPolyList/" class="type-link">nape.geom.GeomPolyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iso` | [nape.geom.IsoFunctionDef](/api-docs/headless/nape/geom/IsoFunctionDef/) |
| `bx0` | [Float](/api-docs/headless/Float/) |
| `by0` | [Float](/api-docs/headless/Float/) |
| `bx1` | [Float](/api-docs/headless/Float/) |
| `by1` | [Float](/api-docs/headless/Float/) |
| `cell` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) |
| `quality` | [Int](/api-docs/headless/Int/) |
| `combine` | [Bool](/api-docs/headless/Bool/) |
| `ret` | [nape.geom.GeomPolyList](/api-docs/headless/nape/geom/GeomPolyList/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="me"><div class="plugin-name">nape</div><code><span class="field-name">me</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_MarchingSquares</a></code><a class="header-anchor" href="#me"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="isos"><div class="plugin-name">nape</div><code><span class="field-name">isos</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPArray2_Float/" class="type-link">zpp_nape.util.ZNPArray2_Float</a></code><a class="header-anchor" href="#isos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ints"><div class="plugin-name">nape</div><code><span class="field-name">ints</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPArray2_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPArray2_ZPP_GeomVert</a></code><a class="header-anchor" href="#ints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="map"><div class="plugin-name">nape</div><code><span class="field-name">map</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPArray2_ZPP_MarchPair/" class="type-link">zpp_nape.util.ZNPArray2_ZPP_MarchPair</a></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="ISO"><div class="plugin-name">nape</div><code><span class="field-name">ISO</span><span class="parenthesis">(</span><span class="arg-name">iso</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/IsoFunctionDef/" class="type-link">nape.geom.IsoFunctionDef</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ISO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iso` | [nape.geom.IsoFunctionDef](/api-docs/headless/nape/geom/IsoFunctionDef/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="output"><div class="plugin-name">nape</div><code><span class="field-name">output</span><span class="parenthesis">(</span><span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/GeomPolyList/" class="type-link">nape.geom.GeomPolyList</a><span class="operator">,</span> <span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#output"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ret` | [nape.geom.GeomPolyList](/api-docs/headless/nape/geom/GeomPolyList/) |
| `poly` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="linkright"><div class="plugin-name">nape</div><code><span class="field-name">linkright</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a></code><a class="header-anchor" href="#linkright"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `poly` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="linkleft"><div class="plugin-name">nape</div><code><span class="field-name">linkleft</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a></code><a class="header-anchor" href="#linkleft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `poly` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="linkdown"><div class="plugin-name">nape</div><code><span class="field-name">linkdown</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a></code><a class="header-anchor" href="#linkdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `poly` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="linkup"><div class="plugin-name">nape</div><code><span class="field-name">linkup</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a></code><a class="header-anchor" href="#linkup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `poly` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combLR"><div class="plugin-name">nape</div><code><span class="field-name">combLR</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#combLR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) |
| `b` | [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combUD"><div class="plugin-name">nape</div><code><span class="field-name">combUD</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#combUD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) |
| `b` | [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combUD_virtual"><div class="plugin-name">nape</div><code><span class="field-name">combUD_virtual</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#combUD_virtual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) |
| `b` | [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combLeft"><div class="plugin-name">nape</div><code><span class="field-name">combLeft</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#combLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combRight"><div class="plugin-name">nape</div><code><span class="field-name">combRight</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#combRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combUp"><div class="plugin-name">nape</div><code><span class="field-name">combUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#combUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="combDown"><div class="plugin-name">nape</div><code><span class="field-name">combDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#combDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="comb"><div class="plugin-name">nape</div><code><span class="field-name">comb</span><span class="parenthesis">(</span><span class="arg-name">flag</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#comb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `flag` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="marchSquare"><div class="plugin-name">nape</div><code><span class="field-name">marchSquare</span><span class="parenthesis">(</span><span class="arg-name">iso</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/IsoFunctionDef/" class="type-link">nape.geom.IsoFunctionDef</a><span class="operator">,</span> <span class="arg-name">isos</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPArray2_Float/" class="type-link">zpp_nape.util.ZNPArray2_Float</a><span class="operator">,</span> <span class="arg-name">ints</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPArray2_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPArray2_ZPP_GeomVert</a><span class="operator">,</span> <span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">xn</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yn</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">fstx</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">fsty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">sndx</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">sndy</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/" class="type-link">ZPP_MarchPair</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#marchSquare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iso` | [nape.geom.IsoFunctionDef](/api-docs/headless/nape/geom/IsoFunctionDef/) |
| `isos` | [zpp_nape.util.ZNPArray2_Float](/api-docs/headless/zpp_nape/util/ZNPArray2_Float/) |
| `ints` | [zpp_nape.util.ZNPArray2_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPArray2_ZPP_GeomVert/) |
| `x0` | [Float](/api-docs/headless/Float/) |
| `y0` | [Float](/api-docs/headless/Float/) |
| `x1` | [Float](/api-docs/headless/Float/) |
| `y1` | [Float](/api-docs/headless/Float/) |
| `xn` | [Int](/api-docs/headless/Int/) |
| `yn` | [Int](/api-docs/headless/Int/) |
| `fstx` | [Bool](/api-docs/headless/Bool/) |
| `fsty` | [Bool](/api-docs/headless/Bool/) |
| `sndx` | [Bool](/api-docs/headless/Bool/) |
| `sndy` | [Bool](/api-docs/headless/Bool/) |
| `quality` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="lerp"><div class="plugin-name">nape</div><code><span class="field-name">lerp</span><span class="parenthesis">(</span><span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lerp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x0` | [Float](/api-docs/headless/Float/) |
| `x1` | [Float](/api-docs/headless/Float/) |
| `v0` | [Float](/api-docs/headless/Float/) |
| `v1` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="xlerp"><div class="plugin-name">nape</div><code><span class="field-name">xlerp</span><span class="parenthesis">(</span><span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">iso</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/IsoFunctionDef/" class="type-link">nape.geom.IsoFunctionDef</a><span class="operator">,</span> <span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xlerp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x0` | [Float](/api-docs/headless/Float/) |
| `x1` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |
| `v0` | [Float](/api-docs/headless/Float/) |
| `v1` | [Float](/api-docs/headless/Float/) |
| `iso` | [nape.geom.IsoFunctionDef](/api-docs/headless/nape/geom/IsoFunctionDef/) |
| `quality` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="ylerp"><div class="plugin-name">nape</div><code><span class="field-name">ylerp</span><span class="parenthesis">(</span><span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">iso</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/IsoFunctionDef/" class="type-link">nape.geom.IsoFunctionDef</a><span class="operator">,</span> <span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ylerp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y0` | [Float](/api-docs/headless/Float/) |
| `y1` | [Float](/api-docs/headless/Float/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `v0` | [Float](/api-docs/headless/Float/) |
| `v1` | [Float](/api-docs/headless/Float/) |
| `iso` | [nape.geom.IsoFunctionDef](/api-docs/headless/nape/geom/IsoFunctionDef/) |
| `quality` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


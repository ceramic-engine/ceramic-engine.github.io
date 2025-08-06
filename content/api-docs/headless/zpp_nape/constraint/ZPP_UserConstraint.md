---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_UserConstraint
target: Headless
permalink: api-docs/headless/zpp_nape/constraint/ZPP_UserConstraint/
---

# ZPP_UserConstraint

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/constraint/UserConstraint.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/zpp_nape/constraint/ZPP_Constraint/">ZPP_Constraint</a> → <strong>zpp_nape.constraint.ZPP_UserConstraint</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="outer_zn"><div class="plugin-name">nape</div><code><span class="field-name">outer_zn</span><span class="operator">:</span> <a href="/api-docs/headless/nape/constraint/UserConstraint/" class="type-link">nape.constraint.UserConstraint</a></code><a class="header-anchor" href="#outer_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bodies"><div class="plugin-name">nape</div><code><span class="field-name">bodies</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#bodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dim"><div class="plugin-name">nape</div><code><span class="field-name">dim</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="jAcc"><div class="plugin-name">nape</div><code><span class="field-name">jAcc</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#jAcc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bias"><div class="plugin-name">nape</div><code><span class="field-name">bias</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#bias"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="stepped"><div class="plugin-name">nape</div><code><span class="field-name">stepped</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stepped"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="soft"><div class="plugin-name">nape</div><code><span class="field-name">soft</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#soft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="gamma"><div class="plugin-name">nape</div><code><span class="field-name">gamma</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="velonly"><div class="plugin-name">nape</div><code><span class="field-name">velonly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#velonly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="jMax"><div class="plugin-name">nape</div><code><span class="field-name">jMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#jMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="Keff"><div class="plugin-name">nape</div><code><span class="field-name">Keff</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#Keff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bindVec2_invalidate"><div class="plugin-name">nape</div><code><span class="field-name">bindVec2_invalidate</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_Vec2/" class="type-link">zpp_nape.geom.ZPP_Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindVec2_invalidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [zpp_nape.geom.ZPP_Vec2](/api-docs/headless/zpp_nape/geom/ZPP_Vec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addBody"><div class="plugin-name">nape</div><code><span class="field-name">addBody</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [zpp_nape.phys.ZPP_Body](/api-docs/headless/zpp_nape/phys/ZPP_Body/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remBody"><div class="plugin-name">nape</div><code><span class="field-name">remBody</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [zpp_nape.phys.ZPP_Body](/api-docs/headless/zpp_nape/phys/ZPP_Body/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bodyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">bodyImpulse</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#bodyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [zpp_nape.phys.ZPP_Body](/api-docs/headless/zpp_nape/phys/ZPP_Body/) |

| Returns |
|---------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="activeBodies"><div class="plugin-name">nape</div><code><span class="field-name">activeBodies</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#activeBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="inactiveBodies"><div class="plugin-name">nape</div><code><span class="field-name">inactiveBodies</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inactiveBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">dict</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/zpp_nape/constraint/ZPP_CopyHelper/" class="type-link">ZPP_CopyHelper</a><span class="operator">&gt;</span> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">todo</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/zpp_nape/constraint/ZPP_CopyHelper/" class="type-link">ZPP_CopyHelper</a><span class="operator">&gt;</span> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/constraint/Constraint/" class="type-link">nape.constraint.Constraint</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dict` | [Array](/api-docs/headless/Array/)<[ZPP_CopyHelper](/api-docs/headless/zpp_nape/constraint/ZPP_CopyHelper/)> | `null` |
| `todo` | [Array](/api-docs/headless/Array/)<[ZPP_CopyHelper](/api-docs/headless/zpp_nape/constraint/ZPP_CopyHelper/)> | `null` |

| Returns |
|---------|
| [nape.constraint.Constraint](/api-docs/headless/nape/constraint/Constraint/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="validate"><div class="plugin-name">nape</div><code><span class="field-name">validate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="wake_connected"><div class="plugin-name">nape</div><code><span class="field-name">wake_connected</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#wake_connected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="forest"><div class="plugin-name">nape</div><code><span class="field-name">forest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pair_exists"><div class="plugin-name">nape</div><code><span class="field-name">pair_exists</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">di</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pair_exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Int](/api-docs/headless/Int/) |
| `di` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="broken"><div class="plugin-name">nape</div><code><span class="field-name">broken</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#broken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearcache"><div class="plugin-name">nape</div><code><span class="field-name">clearcache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearcache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="lsq"><div class="plugin-name">nape</div><code><span class="field-name">lsq</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lsq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [nape.TArray](/api-docs/headless/nape/TArray/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="solve"><div class="plugin-name">nape</div><code><span class="field-name">solve</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#solve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m` | [nape.TArray](/api-docs/headless/nape/TArray/) |

| Returns |
|---------|
| [nape.TArray](/api-docs/headless/nape/TArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="transform"><div class="plugin-name">nape</div><code><span class="field-name">transform</span><span class="parenthesis">(</span><span class="arg-name">L</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `L` | [nape.TArray](/api-docs/headless/nape/TArray/) |
| `x` | [nape.TArray](/api-docs/headless/nape/TArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="preStep"><div class="plugin-name">nape</div><code><span class="field-name">preStep</span><span class="parenthesis">(</span><span class="arg-name">dt</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preStep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dt` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="warmStart"><div class="plugin-name">nape</div><code><span class="field-name">warmStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#warmStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="applyImpulseVel"><div class="plugin-name">nape</div><code><span class="field-name">applyImpulseVel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#applyImpulseVel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="applyImpulsePos"><div class="plugin-name">nape</div><code><span class="field-name">applyImpulsePos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#applyImpulsePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="draw"><div class="plugin-name">nape</div><code><span class="field-name">draw</span><span class="parenthesis">(</span><span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/headless/nape/util/Debug/" class="type-link">nape.util.Debug</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#draw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `g` | [nape.util.Debug](/api-docs/headless/nape/util/Debug/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">dim</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">velonly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dim` | [Int](/api-docs/headless/Int/) |
| `velonly` | [Bool](/api-docs/headless/Bool/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="L"><div class="plugin-name">nape</div><code><span class="field-name">L</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#L"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="y"><div class="plugin-name">nape</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vec3"><div class="plugin-name">nape</div><code><span class="field-name">vec3</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#vec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="J"><div class="plugin-name">nape</div><code><span class="field-name">J</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#J"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="jOld"><div class="plugin-name">nape</div><code><span class="field-name">jOld</span><span class="operator">:</span> <a href="/api-docs/headless/nape/TArray/" class="type-link">nape.TArray</a></code><a class="header-anchor" href="#jOld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


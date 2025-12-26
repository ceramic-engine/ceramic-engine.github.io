---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: Fxaa_Frag
target: Clay (Native)
permalink: api-docs/clay-native/shaders/Fxaa_Frag/
---

# Fxaa_Frag

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/shade/runtime/src/shaders/Fxaa.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/shade/Shade/">shade.Shade</a> → <a href="/api-docs/clay-native/shade/Frag/">shade.Frag</a> → <strong>shaders.Fxaa_Frag</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">shade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="FXAA_REDUCE_MIN"><div class="plugin-name">shade</div><code><span class="field-name">FXAA_REDUCE_MIN</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FXAA_REDUCE_MIN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="FXAA_REDUCE_MUL"><div class="plugin-name">shade</div><code><span class="field-name">FXAA_REDUCE_MUL</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FXAA_REDUCE_MUL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="FXAA_SPAN_MAX"><div class="plugin-name">shade</div><code><span class="field-name">FXAA_SPAN_MAX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FXAA_SPAN_MAX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="params"><div class="plugin-name">shade</div><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mainTex"><div class="plugin-name">shade</div><code><span class="field-name">mainTex</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Sampler2D/" class="type-link">shade.Sampler2D</a></code><a class="header-anchor" href="#mainTex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="resolution"><div class="plugin-name">shade</div><code><span class="field-name">resolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#resolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tcoord"><div class="plugin-name">shade</div><code><span class="field-name">tcoord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#tcoord"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">shade</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="v_rgbNW"><div class="plugin-name">shade</div><code><span class="field-name">v_rgbNW</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#v_rgbNW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="v_rgbNE"><div class="plugin-name">shade</div><code><span class="field-name">v_rgbNE</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#v_rgbNE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="v_rgbSW"><div class="plugin-name">shade</div><code><span class="field-name">v_rgbSW</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#v_rgbSW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="v_rgbSE"><div class="plugin-name">shade</div><code><span class="field-name">v_rgbSE</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#v_rgbSE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="v_rgbM"><div class="plugin-name">shade</div><code><span class="field-name">v_rgbM</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#v_rgbM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="fxaa"><div class="plugin-name">shade</div><code><span class="field-name">fxaa</span><span class="parenthesis">(</span><span class="arg-name">fragCoord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#fxaa"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fragCoord` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec4](/api-docs/clay-native/shade/Vec4/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="texcoords"><div class="plugin-name">shade</div><code><span class="field-name">texcoords</span><span class="parenthesis">(</span><span class="arg-name">fragCoord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texcoords"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fragCoord` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">shade</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">fragCoord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fragCoord` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec4](/api-docs/clay-native/shade/Vec4/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="main"><div class="plugin-name">shade</div><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [shade.Vec4](/api-docs/clay-native/shade/Vec4/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | shade.macros.ShadeMacro.buildFragVertForHaxe() |
| `:autoBuild` | shade.macros.ShadeMacro.buildFragVertForHaxe() |


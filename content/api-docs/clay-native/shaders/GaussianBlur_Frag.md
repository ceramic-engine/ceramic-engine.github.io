---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: GaussianBlur_Frag
target: Clay (Native)
permalink: api-docs/clay-native/shaders/GaussianBlur_Frag/
---

# GaussianBlur_Frag

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/shade/runtime/src/shaders/GaussianBlur.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/shade/Shade/">shade.Shade</a> → <a href="/api-docs/clay-native/shade/Frag/">shade.Frag</a> → <strong>shaders.GaussianBlur_Frag</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">shade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="PI2"><div class="plugin-name">shade</div><code><span class="field-name">PI2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#PI2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DIRECTIONS"><div class="plugin-name">shade</div><code><span class="field-name">DIRECTIONS</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DIRECTIONS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="QUALITY"><div class="plugin-name">shade</div><code><span class="field-name">QUALITY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#QUALITY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="params"><div class="plugin-name">shade</div><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mainTex"><div class="plugin-name">shade</div><code><span class="field-name">mainTex</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Sampler2D/" class="type-link">shade.Sampler2D</a></code><a class="header-anchor" href="#mainTex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="resolution"><div class="plugin-name">shade</div><code><span class="field-name">resolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#resolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="blurSize"><div class="plugin-name">shade</div><code><span class="field-name">blurSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#blurSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tcoord"><div class="plugin-name">shade</div><code><span class="field-name">tcoord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#tcoord"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">shade</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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


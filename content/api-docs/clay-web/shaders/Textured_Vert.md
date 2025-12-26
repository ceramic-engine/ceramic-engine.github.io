---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: Textured_Vert
target: Clay (Web)
permalink: api-docs/clay-web/shaders/Textured_Vert/
---

# Textured_Vert

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/shade/runtime/src/shaders/Textured.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/shade/Shade/">shade.Shade</a> → <a href="/api-docs/clay-web/shade/Vert/">shade.Vert</a> → <strong>shaders.Textured_Vert</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">shade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="params"><div class="plugin-name">shade</div><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="projectionMatrix"><div class="plugin-name">shade</div><code><span class="field-name">projectionMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Mat4/" class="type-link">shade.Mat4</a></code><a class="header-anchor" href="#projectionMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="modelViewMatrix"><div class="plugin-name">shade</div><code><span class="field-name">modelViewMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Mat4/" class="type-link">shade.Mat4</a></code><a class="header-anchor" href="#modelViewMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertexPosition"><div class="plugin-name">shade</div><code><span class="field-name">vertexPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#vertexPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertexTCoord"><div class="plugin-name">shade</div><code><span class="field-name">vertexTCoord</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#vertexTCoord"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertexColor"><div class="plugin-name">shade</div><code><span class="field-name">vertexColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#vertexColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertexTextureId"><div class="plugin-name">shade</div><code><span class="field-name">vertexTextureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#vertexTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tcoord"><div class="plugin-name">shade</div><code><span class="field-name">tcoord</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#tcoord"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">shade</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textureId"><div class="plugin-name">shade</div><code><span class="field-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="main"><div class="plugin-name">shade</div><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [shade.Vec4](/api-docs/clay-web/shade/Vec4/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | shade.macros.ShadeMacro.buildFragVertForHaxe() |
| `:autoBuild` | shade.macros.ShadeMacro.buildFragVertForHaxe() |


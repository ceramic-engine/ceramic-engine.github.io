---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: GaussianBlur
target: Clay (Native)
permalink: api-docs/clay-native/shaders/GaussianBlur/
---

# GaussianBlur

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/shade/runtime/src/shaders/GaussianBlur.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Shader/">ceramic.Shader</a> → <a href="/api-docs/clay-native/shade/Shader__shaders_GaussianBlur_Vert__shaders_GaussianBlur_Frag/">shade.Shader__shaders_GaussianBlur_Vert__shaders_GaussianBlur_Frag</a> → <strong>shaders.GaussianBlur</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="resolution"><div class="plugin-name">shade</div><code><span class="field-name">resolution</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="projectionMatrix"><div class="plugin-name">shade</div><code><span class="field-name">projectionMatrix</span><span class="parenthesis">(</span><span class="arg-name">m00</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m10</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m20</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m30</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m01</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m11</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m21</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m31</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m02</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m12</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m22</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m32</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m03</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m13</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m23</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m33</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#projectionMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m00` | [Float](/api-docs/clay-native/Float/) |
| `m10` | [Float](/api-docs/clay-native/Float/) |
| `m20` | [Float](/api-docs/clay-native/Float/) |
| `m30` | [Float](/api-docs/clay-native/Float/) |
| `m01` | [Float](/api-docs/clay-native/Float/) |
| `m11` | [Float](/api-docs/clay-native/Float/) |
| `m21` | [Float](/api-docs/clay-native/Float/) |
| `m31` | [Float](/api-docs/clay-native/Float/) |
| `m02` | [Float](/api-docs/clay-native/Float/) |
| `m12` | [Float](/api-docs/clay-native/Float/) |
| `m22` | [Float](/api-docs/clay-native/Float/) |
| `m32` | [Float](/api-docs/clay-native/Float/) |
| `m03` | [Float](/api-docs/clay-native/Float/) |
| `m13` | [Float](/api-docs/clay-native/Float/) |
| `m23` | [Float](/api-docs/clay-native/Float/) |
| `m33` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="modelViewMatrix"><div class="plugin-name">shade</div><code><span class="field-name">modelViewMatrix</span><span class="parenthesis">(</span><span class="arg-name">m00</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m10</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m20</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m30</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m01</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m11</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m21</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m31</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m02</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m12</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m22</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m32</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m03</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m13</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m23</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m33</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#modelViewMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m00` | [Float](/api-docs/clay-native/Float/) |
| `m10` | [Float](/api-docs/clay-native/Float/) |
| `m20` | [Float](/api-docs/clay-native/Float/) |
| `m30` | [Float](/api-docs/clay-native/Float/) |
| `m01` | [Float](/api-docs/clay-native/Float/) |
| `m11` | [Float](/api-docs/clay-native/Float/) |
| `m21` | [Float](/api-docs/clay-native/Float/) |
| `m31` | [Float](/api-docs/clay-native/Float/) |
| `m02` | [Float](/api-docs/clay-native/Float/) |
| `m12` | [Float](/api-docs/clay-native/Float/) |
| `m22` | [Float](/api-docs/clay-native/Float/) |
| `m32` | [Float](/api-docs/clay-native/Float/) |
| `m03` | [Float](/api-docs/clay-native/Float/) |
| `m13` | [Float](/api-docs/clay-native/Float/) |
| `m23` | [Float](/api-docs/clay-native/Float/) |
| `m33` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="mainTex"><div class="plugin-name">shade</div><code><span class="field-name">mainTex</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Sampler2D/" class="type-link">shade.Sampler2D</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mainTex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [shade.Sampler2D](/api-docs/clay-native/shade/Sampler2D/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blurSize"><div class="plugin-name">shade</div><code><span class="field-name">blurSize</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blurSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">shade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="resolveTextureSlot"><div class="plugin-name">shade</div><code><span class="field-name">resolveTextureSlot</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#resolveTextureSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | shade.macros.ShadeMacro.buildShaderClassFields() |
| `:autoBuild` | shade.macros.ShadeMacro.buildShaderClassFields() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


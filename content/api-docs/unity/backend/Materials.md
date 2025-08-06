---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Materials
target: Unity
permalink: api-docs/unity/backend/Materials/
---

# Materials

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Materials.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Materials</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="get"><div class="plugin-name">unity</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/unity/backend/StencilState/" class="type-link">StencilState</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MaterialData/" class="type-link">MaterialData</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `textures` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Texture](/api-docs/unity/backend/Texture/)> |
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `srcRgb` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `dstRgb` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `srcAlpha` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `dstAlpha` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `stencil` | [StencilState](/api-docs/unity/backend/StencilState/) |

| Returns |
|---------|
| [MaterialData](/api-docs/unity/backend/MaterialData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="repository"><div class="plugin-name">unity</div><code><span class="field-name">repository</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/MaterialData/" class="type-link">MaterialData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#repository"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


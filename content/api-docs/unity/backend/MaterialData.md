---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: MaterialData
target: Unity
permalink: api-docs/unity/backend/MaterialData/
---

# MaterialData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/MaterialData.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.MaterialData</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="blendingToUnityBlending"><div class="plugin-name">unity</div><code><span class="field-name">blendingToUnityBlending</span><span class="parenthesis">(</span><span class="arg-name">blending</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/BlendMode/" class="type-link">unityengine.rendering.BlendMode</a></code><a class="header-anchor" href="#blendingToUnityBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `blending` | [BlendMode](/api-docs/unity/backend/BlendMode/) |

| Returns |
|---------|
| [unityengine.rendering.BlendMode](/api-docs/unity/unityengine/rendering/BlendMode/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="material"><div class="plugin-name">unity</div><code><span class="field-name">material</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#material"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textures"><div class="plugin-name">unity</div><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="shader"><div class="plugin-name">unity</div><code><span class="field-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#shader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="srcRgb"><div class="plugin-name">unity</div><code><span class="field-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a></code><a class="header-anchor" href="#srcRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dstRgb"><div class="plugin-name">unity</div><code><span class="field-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a></code><a class="header-anchor" href="#dstRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="srcAlpha"><div class="plugin-name">unity</div><code><span class="field-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a></code><a class="header-anchor" href="#srcAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dstAlpha"><div class="plugin-name">unity</div><code><span class="field-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a></code><a class="header-anchor" href="#dstAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="stencil"><div class="plugin-name">unity</div><code><span class="field-name">stencil</span><span class="operator">:</span> <a href="/api-docs/unity/backend/StencilState/" class="type-link">StencilState</a></code><a class="header-anchor" href="#stencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertexBufferAttributes"><div class="plugin-name">unity</div><code><span class="field-name">vertexBufferAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/rendering/VertexAttributeDescriptor/" class="type-link">unityengine.rendering.VertexAttributeDescriptor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#vertexBufferAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="paramsVersion"><div class="plugin-name">unity</div><code><span class="field-name">paramsVersion</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#paramsVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="matches"><div class="plugin-name">unity</div><code><span class="field-name">matches</span><span class="parenthesis">(</span><span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/unity/backend/StencilState/" class="type-link">StencilState</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


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
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="texturesEqualTextures"><div class="plugin-name">unity</div><code><span class="field-name">texturesEqualTextures</span><span class="parenthesis">(</span><span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#texturesEqualTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `textures` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Texture](/api-docs/unity/backend/Texture/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="syncShaderParams"><div class="plugin-name">unity</div><code><span class="field-name">syncShaderParams</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#syncShaderParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: Shader
target: Clay (Web)
permalink: api-docs/clay-web/shade/Shader/
---

# Shader

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Shader/">ceramic.Shader</a> → <strong>shade.Shader</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="vert"><code><span class="field-name">vert</span><span class="operator">:</span> <span class="type-name">shade.Shader.V</span></code><a class="header-anchor" href="#vert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="frag"><code><span class="field-name">frag</span><span class="operator">:</span> <span class="type-name">shade.Shader.F</span></code><a class="header-anchor" href="#frag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">baseAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">textureIdAttribute</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `customAttributes` | [ceramic.ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/clay-web/ceramic/ShaderAttribute/)> |
| `baseAttributes` | [ceramic.ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/clay-web/ceramic/ShaderAttribute/)> |
| `textureIdAttribute` | [ceramic.ShaderAttribute](/api-docs/clay-web/ceramic/ShaderAttribute/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:genericBuild` | shade.macros.ShadeMacro.buildShaderForHaxe() |


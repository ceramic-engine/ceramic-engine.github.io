---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Shader
target: Clay (Native)
permalink: api-docs/clay-native/clay/graphics/Shader/
---

# Shader

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/graphics/Shader.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/clay/Resource/">clay.Resource</a> → <strong>clay.graphics.Shader</strong> (Class) → <a href="/api-docs/clay-native/backend/ShaderImpl/">backend.ShaderImpl</a></div>

## Instance Members

<div class="signature field-var has-description" id="vertSource"><code><span class="field-name">vertSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#vertSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Source code of vertex shader (glsl language on GL targets)

<hr class="field-separator" />

<div class="signature field-var has-description" id="fragSource"><code><span class="field-name">fragSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fragSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Source code of fragment shader (glsl language on GL targets)

<hr class="field-separator" />

<div class="signature field-var has-description" id="attributes"><code><span class="field-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A list of ordered attribute names that will
be assigned indexes in the order of the array.
(GL.bindAttribLocation() or similar)

<hr class="field-separator" />

<div class="signature field-var has-description" id="textures"><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A list of ordered texture uniform names that will
be assigned indexes in the order of the array.
(GL.uniform1i() or similar)

<hr class="field-separator" />

<div class="signature field-var has-description" id="uniforms"><code><span class="field-name">uniforms</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/graphics/Uniforms/" class="type-link">Uniforms</a></code><a class="header-anchor" href="#uniforms"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shader uniforms / named parameters.

<hr class="field-separator" />

<div class="signature field-var has-description" id="gpuShader"><code><span class="field-name">gpuShader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a></code><a class="header-anchor" href="#gpuShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the actual GPU shader

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call `init()` after you have set `vertSource` and `fragSource` properties.
(and optionally: `attributes` and `textures` properties)

<hr class="field-separator" />

<div class="signature field-method no-description" id="activate"><code><span class="field-name">activate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#activate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


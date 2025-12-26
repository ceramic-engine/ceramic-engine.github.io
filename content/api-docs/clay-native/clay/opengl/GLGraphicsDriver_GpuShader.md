---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GLGraphicsDriver_GpuShader
target: Clay (Native)
permalink: api-docs/clay-native/clay/opengl/GLGraphicsDriver_GpuShader/
---

# GLGraphicsDriver_GpuShader

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/opengl/GLGraphicsDriver.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.opengl.GLGraphicsDriver_GpuShader</strong> (Class)</div>

OpenGL shader program implementation.

Stores compiled vertex/fragment shaders and the linked program.

## Instance Members

<div class="signature field-var has-description" id="vertShader"><code><span class="field-name">vertShader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLShader/" class="type-link">GLShader</a></code><a class="header-anchor" href="#vertShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compiled vertex shader handle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fragShader"><code><span class="field-name">fragShader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLShader/" class="type-link">GLShader</a></code><a class="header-anchor" href="#fragShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compiled fragment shader handle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="program"><code><span class="field-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLProgram/" class="type-link">GLProgram</a></code><a class="header-anchor" href="#program"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linked shader program handle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textures"><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of texture uniform names by slot index.

## Private Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | clay.opengl.GLGraphicsDriver |


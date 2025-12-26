---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: RenderConfigOpenGL
target: Clay (Native)
permalink: api-docs/clay-native/clay/RenderConfigOpenGL/
---

# RenderConfigOpenGL

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/Config.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.RenderConfigOpenGL</strong> (Class)</div>

Config specific to an OpenGL rendering context.
Note that these are hints to the system,
you must always check the values after initializing
for what you actually received. The OS/driver decides.

## Instance Members

<div class="signature field-var has-description" id="major"><code><span class="field-name">major</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#major"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The major OpenGL version to request

<hr class="field-separator" />

<div class="signature field-var has-description" id="minor"><code><span class="field-name">minor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#minor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The minor OpenGL version to request

<hr class="field-separator" />

<div class="signature field-var has-description" id="profile"><code><span class="field-name">profile</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/OpenGLProfile/" class="type-link">OpenGLProfile</a></code><a class="header-anchor" href="#profile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The OpenGL context profile to request

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">major</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">profile</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/OpenGLProfile/" class="type-link">OpenGLProfile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `major` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | The major OpenGL version to request |
| `minor` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | The minor OpenGL version to request |
| `profile` | [Null](/api-docs/clay-native/Null/)<[OpenGLProfile](/api-docs/clay-native/clay/OpenGLProfile/)> | *(optional)* | The OpenGL context profile to request |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:publicFields` | - |


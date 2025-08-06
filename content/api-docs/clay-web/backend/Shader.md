---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Shader
target: Clay (Web)
permalink: api-docs/clay-web/backend/Shader/
---

# Shader

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Shader.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Shader</strong> (Abstract)</div>

Abstract type representing a compiled GPU shader program in the Clay backend.

This is a lightweight wrapper around ShaderImpl that provides type safety
while allowing implicit conversions. Shaders contain compiled vertex and
fragment shader code that runs on the GPU to transform vertices and
calculate pixel colors.

In the Clay backend, shaders are managed by the Shaders subsystem and
cached to avoid recompilation. The actual shader implementation varies
by platform (OpenGL, WebGL, etc.).

<div class="see"><strong>See:</strong> ShaderImpl The underlying implementation class, Shaders The shader management subsystem, ceramic.Shader For the high-level shader API</div>


## Type Conversions

**From:**
- `[backend.ShaderImpl](/api-docs/clay-web/backend/ShaderImpl/)`

**To:**
- `[backend.ShaderImpl](/api-docs/clay-web/backend/ShaderImpl/)`


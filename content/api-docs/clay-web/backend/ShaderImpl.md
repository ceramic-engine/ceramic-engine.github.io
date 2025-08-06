---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: ShaderImpl
target: Clay (Web)
permalink: api-docs/clay-web/backend/ShaderImpl/
---

# ShaderImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/ShaderImpl.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/clay/Resource/">clay.Resource</a> → <a href="/api-docs/clay-web/clay/graphics/Shader/">clay.graphics.Shader</a> → <strong>backend.ShaderImpl</strong> (Class)</div>

Clay backend implementation of GPU shader programs.

This class extends Clay's base Shader class to add Ceramic-specific
functionality like custom vertex attributes and multi-texture batching
support. It manages the compiled shader code and provides cloning
capabilities for shader reuse.

Shaders in Ceramic consist of:
- Vertex shader: Transforms vertices from model to screen space
- Fragment shader: Calculates the color of each pixel
- Custom attributes: Additional per-vertex data
- Uniforms: Global shader parameters

<div class="see"><strong>See:</strong> ceramic.Shader For the high-level shader API, ceramic.ShaderAttribute For custom vertex attributes</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="customAttributes"><div class="plugin-name">clay</div><code><span class="field-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom vertex attributes defined for this shader.
These allow passing additional per-vertex data beyond
the standard position, color, and texture coordinates.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isBatchingMultiTexture"><div class="plugin-name">clay</div><code><span class="field-name">isBatchingMultiTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBatchingMultiTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this shader supports multi-texture batching.
When true, the shader can render multiple textures in a single draw call,
improving performance for complex scenes with many different textures.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clone"><div class="plugin-name">clay</div><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ShaderImpl</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a deep copy of this shader.

The cloned shader will have the same source code, attributes,
and settings but will be a separate GPU resource. This is useful
for creating shader variations or when multiple materials need
similar but independent shaders.

Note: Currently recompiles the shader source. Future optimization
could share compiled shader programs between clones.


| Returns | Description |
|---------|-------------|
| [ShaderImpl](/api-docs/clay-web/backend/ShaderImpl/) | A new ShaderImpl instance with the same configuration |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


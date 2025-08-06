---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ShaderAttribute
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ShaderAttribute/
---

# ShaderAttribute

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ShaderAttribute.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ShaderAttribute</strong> (Class)</div>

Defines a vertex attribute for shader programs.

Vertex attributes are per-vertex data passed from the CPU to the GPU.
Each attribute has a name (used in the shader) and a size (number of components).

Standard attributes in Ceramic:
- vertexPosition: vec3 (x, y, z)
- vertexTCoord: vec2 (u, v texture coordinates)
- vertexColor: vec4 (r, g, b, a)

Custom attributes can be added for advanced effects:
- Normal vectors for lighting
- Tangent vectors for normal mapping
- Additional texture coordinates
- Per-vertex animation data

```haxe
// Define custom attributes for a shader
var customAttrs:Array<ShaderAttribute> = [
    { size: 3, name: 'vertexNormal' },
    { size: 4, name: 'vertexTangent' },
    { size: 2, name: 'vertexTCoord2' }
];

// Create shader with custom attributes
var shader = new Shader(backendShader, customAttrs);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Shader/">Shader</a>, <a href="/api-docs/clay-web/ceramic/Mesh/">Mesh</a></div>


## Instance Members

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of components in this attribute.
- 1 = single float
- 2 = vec2 (e.g., texture coordinates)
- 3 = vec3 (e.g., positions, normals)
- 4 = vec4 (e.g., colors with alpha)

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The attribute name as used in the shader code.
Must match the attribute declaration in the vertex shader.

Example: 'vertexPosition' matches 'attribute vec3 vertexPosition;'

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new shader attribute definition.


| Name | Type | Description |
|------|------|-------------|
| `size` | [Int](/api-docs/clay-web/Int/) | Number of components (1-4)  |
| `name` | [String](/api-docs/clay-web/String/) | Attribute name in shader code |

## Private Members

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


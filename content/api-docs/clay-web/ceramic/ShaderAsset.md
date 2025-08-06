---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ShaderAsset
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ShaderAsset/
---

# ShaderAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ShaderAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Asset/">Asset</a> → <strong>ceramic.ShaderAsset</strong> (Class)</div>

Asset type for loading GPU shader programs.

Supports loading:
- Combined shader files containing both vertex and fragment shaders
- Separate vertex (.vert) and fragment (.frag) shader files
- Backend-specific shader formats

Features:
- Custom shader attributes support
- Hot reload for shader development
- Automatic pairing of vertex and fragment shaders
- Default vertex shader fallback

```haxe
var assets = new Assets();
// Load combined shader
assets.addShader('blur');

// Load with custom attributes
assets.addShader('particle', null, {
    customAttributes: [
        {name: 'aVelocity', size: 2},
        {name: 'aLifetime', size: 1}
    ]
});

assets.load();
var shader = assets.shader('blur');
quad.shader = shader;
```

## Instance Members

<div class="signature field-var has-description" id="shader"><code><span class="field-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#shader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded Shader instance.
Observable property that updates when the shader is loaded or reloaded.
Null until the asset is successfully loaded.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateShader"><code><span class="field-name">invalidateShader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the shader program.
Handles both combined and separate vertex/fragment shader files.
Uses default textured vertex shader if none specified.
Emits complete event when finished.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new shader asset.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | | Shader file name (with or without extension)  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* | Loading options including: - customAttributes: Array of custom vertex attributes - vertId: Specific vertex shader path (for separate files) - fragId: Specific fragment shader path (for separate files) |

## Private Members

<div class="signature field-var no-description" id="unobservedShader"><code><span class="field-name">unobservedShader</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#unobservedShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitShaderChange"><code><span class="field-name">emitShaderChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitShaderChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when shader field changes.

| Name | Type |
|------|------|
| `current` | [Shader](/api-docs/clay-web/ceramic/Shader/) |
| `previous` | [Shader](/api-docs/clay-web/ceramic/Shader/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


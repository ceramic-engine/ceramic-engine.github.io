---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: ShadePlugin
target: Unity
permalink: api-docs/unity/ceramic/ShadePlugin/
---

# ShadePlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/shade/runtime/src/ceramic/ShadePlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ShadePlugin</strong> (Class)</div>

Runtime integration of `shade` shaders with the asset system.

Meant to be used as a static extension:

```haxe
using ceramic.ShadePlugin;

assets.watchDirectory();
assets.watchShadeShaders();
```

## Static Members

<div class="signature field-method has-description has-plugin" id="watchShadeShaders"><div class="plugin-name">shade</div><code><span class="field-name">watchShadeShaders</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/WatchDirectory/" class="type-link">WatchDirectory</a></code><a class="header-anchor" href="#watchShadeShaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Watch the Haxe sources of `shade` shaders and re-transpile them on the fly when
they change, so shader edits show up without rebuilding the whole app.

The list of shaders and their source paths is read from the `shade/info.json`
emitted next to the build output, so this only works on a machine that still has
the project sources, and needs the `ceramic` CLI to be reachable (it is when the
app was started through it).

Only the body of a shader function can be reloaded this way: adding or removing a
`@param`, `@in` or `@out` also changes generated code that lives in the app binary,
and still requires a full rebuild.



| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | The assets instance owning the shaders, already watching a directory  |

| Returns | Description |
|---------|-------------|
| [WatchDirectory](/api-docs/unity/ceramic/WatchDirectory/) | The `WatchDirectory` used internally, or `null` if watching is unavailable |

## Private Members

<div class="signature field-method has-description has-plugin" id="assetNameFromShaderInfo"><div class="plugin-name">shade</div><code><span class="field-name">assetNameFromShaderInfo</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#assetNameFromShaderInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Derive the asset name a shader class produces, matching the naming used by
`Assets.add(Class<shade.Shader>)`: package parts joined with `_`, then the class
name with a lowercase first char.

| Name | Type |
|------|------|
| `entry` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="transpileShadeShader"><div class="plugin-name">shade</div><code><span class="field-name">transpileShadeShader</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">filePath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assetName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transpileShadeShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) |
| `filePath` | [String](/api-docs/unity/String/) |
| `assetName` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


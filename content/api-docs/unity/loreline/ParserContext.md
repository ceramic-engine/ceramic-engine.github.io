---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: ParserContext
target: Unity
permalink: api-docs/unity/loreline/ParserContext/
---

# ParserContext

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Parser.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.ParserContext</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="rootPath"><code><span class="field-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#rootPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path of the root script being parsed

<hr class="field-separator" />

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path of the current script being parsed

<hr class="field-separator" />

<div class="signature field-var has-description" id="imports"><code><span class="field-name">imports</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#imports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Available tokens mapped by import path.
All import paths should be either absolute or relative to `rootPath`

<hr class="field-separator" />

<div class="signature field-var has-description" id="imported"><code><span class="field-name">imported</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#imported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mapping of paths that already have been imported (to prevent circular imports)

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">imports</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="arg-name">imported</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `rootPath` | [String](/api-docs/unity/String/) | * The path of the root script being parsed |
| `path` | [String](/api-docs/unity/String/) | * The path of the current script being parsed |
| `imports` | [Map](/api-docs/unity/Map/) | * Available tokens mapped by import path. All import paths should be either absolute or relative to `rootPath` |
| `imported` | [Null](/api-docs/unity/Null/)<[Map](/api-docs/unity/Map/)> | * Mapping of paths that already have been imported (to prevent circular imports) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |


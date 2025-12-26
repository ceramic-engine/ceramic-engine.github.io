---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Config
target: Clay (Native)
permalink: api-docs/clay-native/clay/Config/
---

# Config

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/Config.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Config</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="window"><code><span class="field-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">WindowConfig</a></code><a class="header-anchor" href="#window"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The window config for the default window. default: see `WindowConfig` docs

<hr class="field-separator" />

<div class="signature field-var has-description" id="render"><code><span class="field-name">render</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">RenderConfig</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The render config that specifies rendering and context backend specifics.

<hr class="field-separator" />

<div class="signature field-var has-description" id="runtime"><code><span class="field-name">runtime</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RuntimeConfig/" class="type-link">RuntimeConfig</a></code><a class="header-anchor" href="#runtime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The runtime specific config

<hr class="field-separator" />

<div class="signature field-var has-description" id="updateRate"><code><span class="field-name">updateRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#updateRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this is non zero, updates will be forced to this rate

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">WindowConfig</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">render</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">RenderConfig</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">runtime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/RuntimeConfig/" class="type-link">RuntimeConfig</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">updateRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `window` | [Null](/api-docs/clay-native/Null/)<[WindowConfig](/api-docs/clay-native/clay/WindowConfig/)> | *(optional)* | * The window config for the default window. default: see `WindowConfig` docs |
| `render` | [Null](/api-docs/clay-native/Null/)<[RenderConfig](/api-docs/clay-native/clay/RenderConfig/)> | *(optional)* | * The render config that specifies rendering and context backend specifics. |
| `runtime` | [Null](/api-docs/clay-native/Null/)<[RuntimeConfig](/api-docs/clay-native/clay/RuntimeConfig/)> | *(optional)* | * The runtime specific config |
| `updateRate` | [Null](/api-docs/clay-native/Null/)<[Float](/api-docs/clay-native/Float/)> | *(optional)* | * If this is non zero, updates will be forced to this rate |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:publicFields` | - |


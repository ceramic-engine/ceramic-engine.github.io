---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Binaries
target: Unity
permalink: api-docs/unity/backend/Binaries/
---

# Binaries

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Binaries.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Binaries</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/spec/Binaries/">spec.Binaries</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">unity</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/LoadBinaryOptions/" class="type-link">LoadBinaryOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/unity/String/) | |
| `options` | [Null](/api-docs/unity/Null/)<[LoadBinaryOptions](/api-docs/unity/backend/LoadBinaryOptions/)> | *(optional)* |
| `_done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">unity</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="loadingBinaryCallbacks"><div class="plugin-name">unity</div><code><span class="field-name">loadingBinaryCallbacks</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadingBinaryCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


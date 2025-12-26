---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NodeIdMap
target: Headless
permalink: api-docs/headless/loreline/NodeIdMap/
---

# NodeIdMap

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.NodeIdMap</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">loreline.NodeIdMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [NodeId](/api-docs/headless/loreline/NodeId/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<loreline.NodeIdMap.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">loreline.NodeIdMap.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [NodeId](/api-docs/headless/loreline/NodeId/) |
| `value` | loreline.NodeIdMap.V |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [NodeId](/api-docs/headless/loreline/NodeId/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [NodeId](/api-docs/headless/loreline/NodeId/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/_Node/NodeIdMapIterator/" class="type-link">loreline._Node.NodeIdMapIterator</a><span class="operator">&lt;</span><span class="type-name">loreline.NodeIdMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Node.NodeIdMapIterator](/api-docs/headless/loreline/_Node/NodeIdMapIterator/)<loreline.NodeIdMap.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/_Node/NodeIdMapKeyIterator/" class="type-link">loreline._Node.NodeIdMapKeyIterator</a><span class="operator">&lt;</span><span class="type-name">loreline.NodeIdMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Node.NodeIdMapKeyIterator](/api-docs/headless/loreline/_Node/NodeIdMapKeyIterator/)<loreline.NodeIdMap.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/_Node/NodeIdMapKeyValueIterator/" class="type-link">loreline._Node.NodeIdMapKeyValueIterator</a><span class="operator">&lt;</span><span class="type-name">loreline.NodeIdMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [loreline._Node.NodeIdMapKeyValueIterator](/api-docs/headless/loreline/_Node/NodeIdMapKeyValueIterator/)<loreline.NodeIdMap.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="map"><code><span class="field-name">map</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Int64Map/" class="type-link">Int64Map</a><span class="operator">&lt;</span><span class="type-name">loreline.NodeIdMap.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | loreline.NodeIdMapIterator |


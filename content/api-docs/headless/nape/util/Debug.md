---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Debug
target: Headless
permalink: api-docs/headless/nape/util/Debug/
---

# Debug

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/util/Debug.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.util.Debug</strong> (Class)</div>

Debug class providing general utilities
<br/><br/>
Also serves as the base type for Debug draws.

## Static Members

<div class="signature field-method has-description has-plugin" id="version"><div class="plugin-name">nape</div><code><span class="field-name">version</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Query Nape version
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clearObjectPools"><div class="plugin-name">nape</div><code><span class="field-name">clearObjectPools</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearObjectPools"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Force clear all object pools, both internal and public.


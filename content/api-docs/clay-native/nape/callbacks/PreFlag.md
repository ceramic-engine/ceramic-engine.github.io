---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: PreFlag
target: Clay (Native)
permalink: api-docs/clay-native/nape/callbacks/PreFlag/
---

# PreFlag

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/PreFlag.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.PreFlag</strong> (final class)</div>

Enumeration of interaction states for arbiters. These values are returned
by PreListener callback handlers.

## Static Members

<div class="signature field-var has-description has-plugin" id="ACCEPT"><div class="plugin-name">nape</div><code><span class="field-name">ACCEPT</span><span class="operator">:</span> <a href="#" class="type-link">PreFlag</a></code><a class="header-anchor" href="#ACCEPT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value denotes interaction will occur, and Nape will not ask again.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="IGNORE"><div class="plugin-name">nape</div><code><span class="field-name">IGNORE</span><span class="operator">:</span> <a href="#" class="type-link">PreFlag</a></code><a class="header-anchor" href="#IGNORE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value denotes interaction will be ignored, and Nape will not ask again.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ACCEPT_ONCE"><div class="plugin-name">nape</div><code><span class="field-name">ACCEPT_ONCE</span><span class="operator">:</span> <a href="#" class="type-link">PreFlag</a></code><a class="header-anchor" href="#ACCEPT_ONCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value denotes interaction will occur 'this' step, and Nape will ask what
to do again in the following step if interaction is still possible.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="IGNORE_ONCE"><div class="plugin-name">nape</div><code><span class="field-name">IGNORE_ONCE</span><span class="operator">:</span> <a href="#" class="type-link">PreFlag</a></code><a class="header-anchor" href="#IGNORE_ONCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value denotes interaction will be ignored 'this' step, and Nape will ask what
to do again in the following step if interaction is still possible.

## Instance Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


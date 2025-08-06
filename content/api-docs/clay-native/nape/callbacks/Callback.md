---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Callback
target: Clay (Native)
permalink: api-docs/clay-native/nape/callbacks/Callback/
---

# Callback

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/Callback.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.Callback</strong> (Class) → <a href="/api-docs/clay-native/nape/callbacks/BodyCallback/">BodyCallback</a>, <a href="/api-docs/clay-native/nape/callbacks/ConstraintCallback/">ConstraintCallback</a>, <a href="/api-docs/clay-native/nape/callbacks/InteractionCallback/">InteractionCallback</a>, <a href="/api-docs/clay-native/nape/callbacks/PreCallback/">PreCallback</a></div>

Base type for Callback event objects.
<br/><br/>
Callback objects are automatically reused and you should not keep references
to them.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_Callback/" class="type-link">zpp_nape.callbacks.ZPP_Callback</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="event"><div class="plugin-name">nape</div><code><span class="field-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/CbEvent/" class="type-link">CbEvent</a></code><a class="header-anchor" href="#event"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

CbEvent type this callback was generated for.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listener"><div class="plugin-name">nape</div><code><span class="field-name">listener</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/Listener/" class="type-link">Listener</a></code><a class="header-anchor" href="#listener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Listener which was responsive for this callback being generated.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members


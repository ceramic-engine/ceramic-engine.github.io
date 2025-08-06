---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Listener
target: Headless
permalink: api-docs/headless/nape/callbacks/Listener/
---

# Listener

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/Listener.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.Listener</strong> (Class) → <a href="/api-docs/headless/nape/callbacks/BodyListener/">BodyListener</a>, <a href="/api-docs/headless/nape/callbacks/ConstraintListener/">ConstraintListener</a>, <a href="/api-docs/headless/nape/callbacks/InteractionListener/">InteractionListener</a>, <a href="/api-docs/headless/nape/callbacks/PreListener/">PreListener</a></div>

Base type for all Nape callback listeners.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/callbacks/ZPP_Listener/" class="type-link">zpp_nape.callbacks.ZPP_Listener</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="type"><div class="plugin-name">nape</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/nape/callbacks/ListenerType/" class="type-link">ListenerType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sub-type of this listener.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="event"><div class="plugin-name">nape</div><code><span class="field-name">event</span><span class="operator">:</span> <a href="/api-docs/headless/nape/callbacks/CbEvent/" class="type-link">CbEvent</a></code><a class="header-anchor" href="#event"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The CbEvent this listener responds to.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="precedence"><div class="plugin-name">nape</div><code><span class="field-name">precedence</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#precedence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The precedence of this listener.
<br/><br/>
In any case that there is more than one suitable listener for a situation,
the listeners will be ordered by their precedence.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Space this listener is assigned to.
<br/><br/>
This value can be set, with setting to null being equivalent to removing
the listener from whichever Space it is presently assigned to.

@default null

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members


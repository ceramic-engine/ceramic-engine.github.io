---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: PreCallback
target: Clay (Web)
permalink: api-docs/clay-web/nape/callbacks/PreCallback/
---

# PreCallback

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/PreCallback.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/nape/callbacks/Callback/">Callback</a> → <strong>nape.callbacks.PreCallback</strong> (final class)</div>

Callback object for Pre-Interaction type events.
<br/><br/>
This, like all other callback objects are automatically reused
and you should not keep any reference to them.

## Instance Members

<div class="signature field-var has-description has-plugin" id="arbiter"><div class="plugin-name">nape</div><code><span class="field-name">arbiter</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/dynamics/Arbiter/" class="type-link">nape.dynamics.Arbiter</a></code><a class="header-anchor" href="#arbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Arbiter related to callback event.
<br/><br/>
In the case that this pre-event occurs between two non-Shape's
then this is the first arbiter to be created for the related
interactionType

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int1"><div class="plugin-name">nape</div><code><span class="field-name">int1</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Interactor/" class="type-link">nape.phys.Interactor</a></code><a class="header-anchor" href="#int1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First Interactor involved in callback event.
<br/><br/>
This interactor will have CbType set matched by the first
OptionType in InteractionListener

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int2"><div class="plugin-name">nape</div><code><span class="field-name">int2</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Interactor/" class="type-link">nape.phys.Interactor</a></code><a class="header-anchor" href="#int2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second Interactor involved in callback event.
<br/><br/>
This interactor will have CbType set matched by the second
OptionType in InteractionListener

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="swapped"><div class="plugin-name">nape</div><code><span class="field-name">swapped</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#swapped"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Describes how Arbiter's objects are related to int1/int2 properties
<br/><br/>
If true, then arbiter.shape1 will belong to callback.int2, and
arbiter.shape2 will belong to callback.int1.
<br/><br/>
If you take the arbiter's normal, then if swapped is true, the normal
will point from int2 towards int1 instead of from int1 towards int2.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


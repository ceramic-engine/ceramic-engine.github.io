---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: InteractionCallback
target: Clay (Native)
permalink: api-docs/clay-native/nape/callbacks/InteractionCallback/
---

# InteractionCallback

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/InteractionCallback.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/nape/callbacks/Callback/">Callback</a> → <strong>nape.callbacks.InteractionCallback</strong> (final class)</div>

Callback object for Interaction type events.
<br/><br/>
This, like all other callback objects are automatically reused
and you should not keep any reference to them.

## Instance Members

<div class="signature field-var has-description has-plugin" id="int1"><div class="plugin-name">nape</div><code><span class="field-name">int1</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Interactor/" class="type-link">nape.phys.Interactor</a></code><a class="header-anchor" href="#int1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First Interactor involved in callback event.
<br/><br/>
This interactor will have CbType set matched by the first
OptionType in InteractionListener

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int2"><div class="plugin-name">nape</div><code><span class="field-name">int2</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Interactor/" class="type-link">nape.phys.Interactor</a></code><a class="header-anchor" href="#int2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second Interactor involved in callback event.
<br/><br/>
This interactor will have CbType set matched by the second
OptionType in InteractionListener

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="arbiters"><div class="plugin-name">nape</div><code><span class="field-name">arbiters</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/ArbiterList/" class="type-link">nape.dynamics.ArbiterList</a></code><a class="header-anchor" href="#arbiters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Existing arbiters between interactors.
<br/><br/>
This list will at present contain 'all' arbiters, not just those matching the
interactionType in the InteractionListener. (This may be subject to change).

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

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioFilterInfo
target: Clay (Native)
permalink: api-docs/clay-native/backend/AudioFilterInfo/
---

# AudioFilterInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/AudioFilterInfo.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.AudioFilterInfo</strong> (Class)</div>

Internal metadata for audio filters attached to a bus.

This structure tracks the state and components needed for
real-time audio filter processing in the Clay backend.
It bridges between the high-level AudioFilter API and the
low-level worklet processing system.

## Instance Members

<div class="signature field-var has-description has-plugin" id="id"><div class="plugin-name">clay</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this filter instance.
Used to reference the filter in add/remove operations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paramsDirty"><div class="plugin-name">clay</div><code><span class="field-name">paramsDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paramsDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating whether filter parameters need to be
synchronized to the worklet on the next audio process cycle.
Set to true when filterParamsChanged() is called.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worklet"><div class="plugin-name">clay</div><code><span class="field-name">worklet</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AudioFilterWorklet/" class="type-link">ceramic.AudioFilterWorklet</a></code><a class="header-anchor" href="#worklet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The instantiated worklet that performs the actual audio processing.
Created lazily on first use in the audio thread.
On web, this runs in an AudioWorklet. On native, it runs in the audio callback.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="workletClass"><div class="plugin-name">clay</div><code><span class="field-name">workletClass</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AudioFilterWorklet/" class="type-link">ceramic.AudioFilterWorklet</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#workletClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The class type of the worklet to instantiate.
Retrieved from the filter's workletClass() method.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filter"><div class="plugin-name">clay</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AudioFilter/" class="type-link">ceramic.AudioFilter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The high-level filter instance that contains the parameters
and configuration for this audio effect.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">paramsDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">worklet</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AudioFilterWorklet/" class="type-link">ceramic.AudioFilterWorklet</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">workletClass</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AudioFilterWorklet/" class="type-link">ceramic.AudioFilterWorklet</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AudioFilter/" class="type-link">ceramic.AudioFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | | * Unique identifier for this filter instance. Used to reference the filter in add/remove operations. |
| `paramsDirty` | [Null](/api-docs/clay-native/Null/)<[Bool](/api-docs/clay-native/Bool/)> | *(optional)* | * Flag indicating whether filter parameters need to be synchronized to the worklet on the next audio process cycle. Set to true when filterParamsChanged() is called. |
| `worklet` | [Null](/api-docs/clay-native/Null/)<[ceramic.AudioFilterWorklet](/api-docs/clay-native/ceramic/AudioFilterWorklet/)> | *(optional)* | * The instantiated worklet that performs the actual audio processing. Created lazily on first use in the audio thread. On web, this runs in an AudioWorklet. On native, it runs in the audio callback. |
| `workletClass` | [Class](/api-docs/clay-native/Class/)<[ceramic.AudioFilterWorklet](/api-docs/clay-native/ceramic/AudioFilterWorklet/)> | | * The class type of the worklet to instantiate. Retrieved from the filter's workletClass() method. |
| `filter` | [ceramic.AudioFilter](/api-docs/clay-native/ceramic/AudioFilter/) | | * The high-level filter instance that contains the parameters and configuration for this audio effect. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


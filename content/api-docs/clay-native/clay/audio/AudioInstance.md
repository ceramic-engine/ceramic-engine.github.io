---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioInstance
target: Clay (Native)
permalink: api-docs/clay-native/clay/audio/AudioInstance/
---

# AudioInstance

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/audio/AudioInstance.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.audio.AudioInstance</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioSource/" class="type-link">AudioSource</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handle"><code><span class="field-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">AudioHandle</a></code><a class="header-anchor" href="#handle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasEnded"><code><span class="field-name">hasEnded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="dataGet"><code><span class="field-name">dataGet</span><span class="parenthesis">(</span><span class="arg-name">into</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">intoResult</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#dataGet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `into` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) |
| `start` | [Int](/api-docs/clay-native/Int/) |
| `length` | [Int](/api-docs/clay-native/Int/) |
| `intoResult` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dataSeek"><code><span class="field-name">dataSeek</span><span class="parenthesis">(</span><span class="arg-name">toSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dataSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `toSamples` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new instance from the given audio source.
Usually called via `source.instance()`, not directly.

| Name | Type |
|------|------|
| `source` | [AudioSource](/api-docs/clay-native/clay/audio/AudioSource/) |
| `handle` | [AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |


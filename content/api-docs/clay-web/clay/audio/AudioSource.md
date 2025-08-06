---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioSource
target: Clay (Web)
permalink: api-docs/clay-web/clay/audio/AudioSource/
---

# AudioSource

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/audio/AudioSource.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.audio.AudioSource</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioData/" class="type-link">AudioData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="streamBufferLength"><code><span class="field-name">streamBufferLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#streamBufferLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Streams only: The size in bytes of a single stream buffer.
This is ~1 sec in 16 bit mono. default:176400
for most cases this can be left alone.

<hr class="field-separator" />

<div class="signature field-var has-description" id="streamBufferCount"><code><span class="field-name">streamBufferCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#streamBufferCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Streams only: The number of buffers to queue up. default:2
For most cases this can be left alone.

<hr class="field-separator" />

<div class="signature field-var has-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this source has been destroyed

<hr class="field-separator" />

<div class="signature field-var has-description" id="sourceId"><code><span class="field-name">sourceId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#sourceId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A unique key for this source

<hr class="field-separator" />

<div class="signature field-method has-description" id="instance"><code><span class="field-name">instance</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioInstance/" class="type-link">AudioInstance</a></code><a class="header-anchor" href="#instance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by the audio system to obtain a new instance of this source.

| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [AudioInstance](/api-docs/clay-web/clay/audio/AudioInstance/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bytesToSeconds"><code><span class="field-name">bytesToSeconds</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bytesToSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A helper for converting bytes to seconds for a sound source

| Name | Type |
|------|------|
| `bytes` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="secondsToBytes"><code><span class="field-name">secondsToBytes</span><span class="parenthesis">(</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#secondsToBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A helper for converting seconds to bytes for this audio source

| Name | Type |
|------|------|
| `seconds` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDuration"><code><span class="field-name">getDuration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioData/" class="type-link">AudioData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |
| `data` | [AudioData](/api-docs/clay-web/clay/audio/AudioData/) |

## Private Members

<div class="signature field-var has-description" id="instances"><code><span class="field-name">instances</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clay/audio/AudioInstance/" class="type-link">AudioInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local list of instances spawned from this source.
used when destroying the source, to take instances with it.

<hr class="field-separator" />

<div class="signature field-method no-description" id="instanceKilled"><code><span class="field-name">instanceKilled</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioInstance/" class="type-link">AudioInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#instanceKilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance` | [AudioInstance](/api-docs/clay-web/clay/audio/AudioInstance/) |


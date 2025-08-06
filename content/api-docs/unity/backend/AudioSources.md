---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioSources
target: Unity
permalink: api-docs/unity/backend/AudioSources/
---

# AudioSources

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/AudioSources.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.AudioSources</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="shared"><div class="plugin-name">unity</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">AudioSources</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="get"><div class="plugin-name">unity</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioSource/" class="type-link">unityengine.AudioSource</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [unityengine.AudioSource](/api-docs/unity/unityengine/AudioSource/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="recycle"><div class="plugin-name">unity</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="arg-name">audioSource</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioSource/" class="type-link">unityengine.AudioSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audioSource` | [unityengine.AudioSource](/api-docs/unity/unityengine/AudioSource/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bus"><div class="plugin-name">unity</div><code><span class="field-name">bus</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/AudioBus/" class="type-link">AudioBus</a></code><a class="header-anchor" href="#bus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [AudioBus](/api-docs/unity/backend/AudioBus/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createBusFilter"><div class="plugin-name">unity</div><code><span class="field-name">createBusFilter</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createBusFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="miniLoudObject"><div class="plugin-name">unity</div><code><span class="field-name">miniLoudObject</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudUnity/" class="type-link">MiniLoudUnity</a></code><a class="header-anchor" href="#miniLoudObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [MiniLoudUnity](/api-docs/unity/backend/MiniLoudUnity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">gameObject</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/GameObject/" class="type-link">unityengine.GameObject</a><span class="operator">,</span> <span class="arg-name">audioMixer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioMixer/" class="type-link">unityengine.AudioMixer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gameObject` | [unityengine.GameObject](/api-docs/unity/unityengine/GameObject/) |
| `audioMixer` | [unityengine.AudioMixer](/api-docs/unity/unityengine/AudioMixer/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="miniLoudObjectByBus"><div class="plugin-name">unity</div><code><span class="field-name">miniLoudObjectByBus</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/GameObject/" class="type-link">unityengine.GameObject</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#miniLoudObjectByBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="miniLoudComponentByBus"><div class="plugin-name">unity</div><code><span class="field-name">miniLoudComponentByBus</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/MiniLoudUnity/" class="type-link">MiniLoudUnity</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#miniLoudComponentByBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="gameObject"><div class="plugin-name">unity</div><code><span class="field-name">gameObject</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/GameObject/" class="type-link">unityengine.GameObject</a></code><a class="header-anchor" href="#gameObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="audioMixer"><div class="plugin-name">unity</div><code><span class="field-name">audioMixer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioMixer/" class="type-link">unityengine.AudioMixer</a></code><a class="header-anchor" href="#audioMixer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="all"><div class="plugin-name">unity</div><code><span class="field-name">all</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/AudioSource/" class="type-link">unityengine.AudioSource</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pool"><div class="plugin-name">unity</div><code><span class="field-name">pool</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/AudioSource/" class="type-link">unityengine.AudioSource</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="busses"><div class="plugin-name">unity</div><code><span class="field-name">busses</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/AudioBus/" class="type-link">AudioBus</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#busses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bussesNotFound"><div class="plugin-name">unity</div><code><span class="field-name">bussesNotFound</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bussesNotFound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="removeExistingAudioSourceComponents"><div class="plugin-name">unity</div><code><span class="field-name">removeExistingAudioSourceComponents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeExistingAudioSourceComponents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


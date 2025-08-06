---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioHandleImpl
target: Unity
permalink: api-docs/unity/backend/AudioHandleImpl/
---

# AudioHandleImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/AudioHandleImpl.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.AudioHandleImpl</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="volume"><div class="plugin-name">unity</div><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pan"><div class="plugin-name">unity</div><code><span class="field-name">pan</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pitch"><div class="plugin-name">unity</div><code><span class="field-name">pitch</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="position"><div class="plugin-name">unity</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="loop"><div class="plugin-name">unity</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="resource"><div class="plugin-name">unity</div><code><span class="field-name">resource</span><span class="operator">:</span> <a href="/api-docs/unity/backend/AudioResourceImpl/" class="type-link">AudioResourceImpl</a></code><a class="header-anchor" href="#resource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="play"><div class="plugin-name">unity</div><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pause"><div class="plugin-name">unity</div><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resume"><div class="plugin-name">unity</div><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="stop"><div class="plugin-name">unity</div><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">resource</span><span class="operator">:</span> <a href="/api-docs/unity/backend/AudioResourceImpl/" class="type-link">AudioResourceImpl</a><span class="operator">,</span> <span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">useMiniLoud</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `resource` | [AudioResourceImpl](/api-docs/unity/backend/AudioResourceImpl/) |
| `busIndex` | [Int](/api-docs/unity/Int/) |
| `useMiniLoud` | [Bool](/api-docs/unity/Bool/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="updateAudioSourceOnSetPosition"><div class="plugin-name">unity</div><code><span class="field-name">updateAudioSourceOnSetPosition</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#updateAudioSourceOnSetPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="audioSource"><div class="plugin-name">unity</div><code><span class="field-name">audioSource</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioSource/" class="type-link">unityengine.AudioSource</a></code><a class="header-anchor" href="#audioSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="useMiniLoud"><div class="plugin-name">unity</div><code><span class="field-name">useMiniLoud</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useMiniLoud"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="miniLoudHandle"><div class="plugin-name">unity</div><code><span class="field-name">miniLoudHandle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a></code><a class="header-anchor" href="#miniLoudHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="length"><div class="plugin-name">unity</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="busIndex"><div class="plugin-name">unity</div><code><span class="field-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#busIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="paused"><div class="plugin-name">unity</div><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="syncAudioSource"><div class="plugin-name">unity</div><code><span class="field-name">syncAudioSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#syncAudioSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="recycleAudioSource"><div class="plugin-name">unity</div><code><span class="field-name">recycleAudioSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycleAudioSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addHandleInCheckedList"><div class="plugin-name">unity</div><code><span class="field-name">addHandleInCheckedList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addHandleInCheckedList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


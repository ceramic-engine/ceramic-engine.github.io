---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Audio
target: Headless
permalink: api-docs/headless/backend/Audio/
---

# Audio

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/backend/Audio.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Audio</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spec/Audio/">spec.Audio</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">headless</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/backend/LoadAudioOptions/" class="type-link">LoadAudioOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/headless/String/) | |
| `options` | [Null](/api-docs/headless/Null/)<[LoadAudioOptions](/api-docs/headless/backend/LoadAudioOptions/)> | *(optional)* |
| `_done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createFromSamplesBuffer"><div class="plugin-name">headless</div><code><span class="field-name">createFromSamplesBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">interleaved</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">AudioResource</a></code><a class="header-anchor" href="#createFromSamplesBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Float32Array](/api-docs/headless/backend/Float32Array/) |
| `samples` | [Int](/api-docs/headless/Int/) |
| `channels` | [Int](/api-docs/headless/Int/) |
| `sampleRate` | [Float](/api-docs/headless/Float/) |
| `interleaved` | [Bool](/api-docs/headless/Bool/) |

| Returns |
|---------|
| [AudioResource](/api-docs/headless/backend/AudioResource/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">headless</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getDuration"><div class="plugin-name">headless</div><code><span class="field-name">getDuration</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audio` | [AudioResource](/api-docs/headless/backend/AudioResource/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resumeAudioContext"><div class="plugin-name">headless</div><code><span class="field-name">resumeAudioContext</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeAudioContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">headless</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audio` | [AudioResource](/api-docs/headless/backend/AudioResource/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="mute"><div class="plugin-name">headless</div><code><span class="field-name">mute</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a></code><a class="header-anchor" href="#mute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audio` | [AudioResource](/api-docs/headless/backend/AudioResource/) |

| Returns |
|---------|
| [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="play"><div class="plugin-name">headless</div><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">AudioResource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">channel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `audio` | [AudioResource](/api-docs/headless/backend/AudioResource/) | |
| `volume` | [Float](/api-docs/headless/Float/) | `0.5` |
| `pan` | [Float](/api-docs/headless/Float/) | `0` |
| `pitch` | [Float](/api-docs/headless/Float/) | `1` |
| `position` | [Float](/api-docs/headless/Float/) | `0` |
| `loop` | [Bool](/api-docs/headless/Bool/) | `false` |
| `channel` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pause"><div class="plugin-name">headless</div><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resume"><div class="plugin-name">headless</div><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="stop"><div class="plugin-name">headless</div><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getVolume"><div class="plugin-name">headless</div><code><span class="field-name">getVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVolume"><div class="plugin-name">headless</div><code><span class="field-name">setVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |
| `volume` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getPan"><div class="plugin-name">headless</div><code><span class="field-name">getPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPan"><div class="plugin-name">headless</div><code><span class="field-name">setPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |
| `pan` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getPitch"><div class="plugin-name">headless</div><code><span class="field-name">getPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPitch"><div class="plugin-name">headless</div><code><span class="field-name">setPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |
| `pitch` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getPosition"><div class="plugin-name">headless</div><code><span class="field-name">getPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPosition"><div class="plugin-name">headless</div><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [AudioHandle](/api-docs/headless/backend/AudioHandle/) |
| `position` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addFilter"><div class="plugin-name">headless</div><code><span class="field-name">addFilter</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AudioFilter/" class="type-link">ceramic.AudioFilter</a><span class="operator">,</span> <span class="arg-name">onReady</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bus` | [Int](/api-docs/headless/Int/) |
| `filter` | [ceramic.AudioFilter](/api-docs/headless/ceramic/AudioFilter/) |
| `onReady` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="removeFilter"><div class="plugin-name">headless</div><code><span class="field-name">removeFilter</span><span class="parenthesis">(</span><span class="arg-name">channel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `channel` | [Int](/api-docs/headless/Int/) |
| `filterId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="filterParamsChanged"><div class="plugin-name">headless</div><code><span class="field-name">filterParamsChanged</span><span class="parenthesis">(</span><span class="arg-name">channel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#filterParamsChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `channel` | [Int](/api-docs/headless/Int/) |
| `filterId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">headless</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


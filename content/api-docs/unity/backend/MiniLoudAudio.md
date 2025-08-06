---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: MiniLoudAudio
target: Unity
permalink: api-docs/unity/backend/MiniLoudAudio/
---

# MiniLoudAudio

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/MiniLoudAudio.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.MiniLoudAudio</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="CreateFromData"><div class="plugin-name">unity</div><code><span class="field-name">CreateFromData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioResource/" class="type-link">MiniLoudAudioResource</a></code><a class="header-anchor" href="#CreateFromData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `channels` | [Int](/api-docs/unity/Int/) |
| `sampleRate` | [Single](/api-docs/unity/Single/) |

| Returns |
|---------|
| [MiniLoudAudioResource](/api-docs/unity/backend/MiniLoudAudioResource/) |

## Instance Members

<div class="signature field-method no-description has-plugin" id="GetDuration"><div class="plugin-name">unity</div><code><span class="field-name">GetDuration</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioResource/" class="type-link">MiniLoudAudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#GetDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audio` | [MiniLoudAudioResource](/api-docs/unity/backend/MiniLoudAudioResource/) |

| Returns |
|---------|
| [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Destroy"><div class="plugin-name">unity</div><code><span class="field-name">Destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Mute"><div class="plugin-name">unity</div><code><span class="field-name">Mute</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioResource/" class="type-link">MiniLoudAudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a></code><a class="header-anchor" href="#Mute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audio` | [MiniLoudAudioResource](/api-docs/unity/backend/MiniLoudAudioResource/) |

| Returns |
|---------|
| [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Play"><div class="plugin-name">unity</div><code><span class="field-name">Play</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioResource/" class="type-link">MiniLoudAudioResource</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a></code><a class="header-anchor" href="#Play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audio` | [MiniLoudAudioResource](/api-docs/unity/backend/MiniLoudAudioResource/) |
| `volume` | [Single](/api-docs/unity/Single/) |
| `pan` | [Single](/api-docs/unity/Single/) |
| `pitch` | [Single](/api-docs/unity/Single/) |
| `position` | [Single](/api-docs/unity/Single/) |
| `loop` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Pause"><div class="plugin-name">unity</div><code><span class="field-name">Pause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Resume"><div class="plugin-name">unity</div><code><span class="field-name">Resume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Stop"><div class="plugin-name">unity</div><code><span class="field-name">Stop</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="GetVolume"><div class="plugin-name">unity</div><code><span class="field-name">GetVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#GetVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

| Returns |
|---------|
| [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="SetVolume"><div class="plugin-name">unity</div><code><span class="field-name">SetVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |
| `volume` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="GetPan"><div class="plugin-name">unity</div><code><span class="field-name">GetPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#GetPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

| Returns |
|---------|
| [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="SetPan"><div class="plugin-name">unity</div><code><span class="field-name">SetPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |
| `pan` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="GetPitch"><div class="plugin-name">unity</div><code><span class="field-name">GetPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#GetPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

| Returns |
|---------|
| [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="SetPitch"><div class="plugin-name">unity</div><code><span class="field-name">SetPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |
| `pitch` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="GetPosition"><div class="plugin-name">unity</div><code><span class="field-name">GetPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#GetPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |

| Returns |
|---------|
| [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="SetPosition"><div class="plugin-name">unity</div><code><span class="field-name">SetPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/backend/MiniLoudAudioHandle/" class="type-link">MiniLoudAudioHandle</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) |
| `position` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="ProcessAudio"><div class="plugin-name">unity</div><code><span class="field-name">ProcessAudio</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ProcessAudio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `channels` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sampleRate` | [Int](/api-docs/unity/Int/) |
| `channels` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


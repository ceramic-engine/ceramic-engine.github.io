---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: WebAudio
target: Clay (Web)
permalink: api-docs/clay-web/clay/web/WebAudio/
---

# WebAudio

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/web/WebAudio.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/clay/base/BaseAudio/">clay.base.BaseAudio</a> → <strong>clay.web.WebAudio</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description" id="MAX_WORKLET_PARAMS"><code><span class="field-name">MAX_WORKLET_PARAMS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_WORKLET_PARAMS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="context"><code><span class="field-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioContext/" class="type-link">js.html.audio.AudioContext</a></code><a class="header-anchor" href="#context"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createBus"><code><span class="field-name">createBus</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `index` | [Int](/api-docs/clay-web/Int/) | |
| `name` | [String](/api-docs/clay-web/String/) | `""` |
| `volume` | [Float](/api-docs/clay-web/Float/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyBus"><code><span class="field-name">destroyBus</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setBusVolume"><code><span class="field-name">setBusVolume</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBusVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `volume` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBusVolume"><code><span class="field-name">getBusVolume</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getBusVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setBusActive"><code><span class="field-name">setBusActive</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBusActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `active` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadWorkletModule"><code><span class="field-name">loadWorkletModule</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadWorkletModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `url` | [String](/api-docs/clay-web/String/) | |
| `callback` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="attachWorkletToBus"><code><span class="field-name">attachWorkletToBus</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">workletName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">onReady</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#attachWorkletToBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) | |
| `workletName` | [String](/api-docs/clay-web/String/) | |
| `options` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `onReady` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="detachWorkletFromBus"><code><span class="field-name">detachWorkletFromBus</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#detachWorkletFromBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sendMessageToWorklet"><code><span class="field-name">sendMessageToWorklet</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sendMessageToWorklet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `message` | [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scheduleWhenBusWorkletReady"><code><span class="field-name">scheduleWhenBusWorkletReady</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">ready</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scheduleWhenBusWorkletReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `ready` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWorkletParameterWhenReady"><code><span class="field-name">setWorkletParameterWhenReady</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">paramName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWorkletParameterWhenReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `paramName` | [String](/api-docs/clay-web/String/) |
| `value` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWorkletParameter"><code><span class="field-name">setWorkletParameter</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">paramName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWorkletParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `paramName` | [String](/api-docs/clay-web/String/) |
| `value` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWorkletParameterByIndexWhenReady"><code><span class="field-name">setWorkletParameterByIndexWhenReady</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">paramIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWorkletParameterByIndexWhenReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `paramIndex` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWorkletParameterByIndex"><code><span class="field-name">setWorkletParameterByIndex</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">paramIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWorkletParameterByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `paramIndex` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWorkletParameterByIndex"><code><span class="field-name">getWorkletParameterByIndex</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">paramIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWorkletParameterByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `paramIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">DEFAULT_BUS</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `source` | [clay.audio.AudioSource](/api-docs/clay-web/clay/audio/AudioSource/) | |
| `volume` | [Float](/api-docs/clay-web/Float/) | |
| `paused` | [Bool](/api-docs/clay-web/Bool/) | |
| `busIndex` | [Int](/api-docs/clay-web/Int/) | `DEFAULT_BUS` |

| Returns |
|---------|
| [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loop"><code><span class="field-name">loop</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">DEFAULT_BUS</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `source` | [clay.audio.AudioSource](/api-docs/clay-web/clay/audio/AudioSource/) | |
| `volume` | [Float](/api-docs/clay-web/Float/) | |
| `paused` | [Bool](/api-docs/clay-web/Bool/) | |
| `busIndex` | [Int](/api-docs/clay-web/Int/) | `DEFAULT_BUS` |

| Returns |
|---------|
| [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unPause"><code><span class="field-name">unPause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unPause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="volume"><code><span class="field-name">volume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |
| `volume` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pan"><code><span class="field-name">pan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |
| `pan` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pitch"><code><span class="field-name">pitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |
| `pitch` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="position"><code><span class="field-name">position</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |
| `time` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="volumeOf"><code><span class="field-name">volumeOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volumeOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="panOf"><code><span class="field-name">panOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#panOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pitchOf"><code><span class="field-name">pitchOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pitchOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="positionOf"><code><span class="field-name">positionOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#positionOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stateOf"><code><span class="field-name">stateOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioState/" class="type-link">clay.audio.AudioState</a></code><a class="header-anchor" href="#stateOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [clay.audio.AudioState](/api-docs/clay-web/clay/audio/AudioState/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loopOf"><code><span class="field-name">loopOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loopOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="instanceOf"><code><span class="field-name">instanceOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioInstance/" class="type-link">clay.audio.AudioInstance</a></code><a class="header-anchor" href="#instanceOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [clay.audio.AudioInstance](/api-docs/clay-web/clay/audio/AudioInstance/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="suspend"><code><span class="field-name">suspend</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#suspend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSoundBus"><code><span class="field-name">getSoundBus</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSoundBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="moveSoundToBus"><code><span class="field-name">moveSoundToBus</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">newBusIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#moveSoundToBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |
| `newBusIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="listBusses"><code><span class="field-name">listBusses</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#listBusses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBusName"><code><span class="field-name">getBusName</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getBusName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createBusFilter"><code><span class="field-name">createBusFilter</span><span class="parenthesis">(</span><span class="arg-name">uri</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">createFunc</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">destroyFunc</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createBusFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uri` | [String](/api-docs/clay-web/String/) |
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `createFunc` | Function |
| `destroyFunc` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addBusFilterWorklet"><code><span class="field-name">addBusFilterWorklet</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">workletClass</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">workletReady</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBusFilterWorklet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `filterId` | [Int](/api-docs/clay-web/Int/) |
| `workletClass` | [Class](/api-docs/clay-web/Class/)<[Any](/api-docs/clay-web/Any/)> |
| `workletReady` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyBusFilterWorklet"><code><span class="field-name">destroyBusFilterWorklet</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyBusFilterWorklet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |
| `filterId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadData"><code><span class="field-name">loadData</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">isStream</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#loadData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `isStream` | [Bool](/api-docs/clay-web/Bool/) | |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-web/clay/audio/AudioFormat/) | |
| `async` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-web/clay/audio/AudioData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dataFromBytes"><code><span class="field-name">dataFromBytes</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dataFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `id` | [String](/api-docs/clay-web/String/) | |
| `bytes` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-web/clay/audio/AudioFormat/) | *(optional)* |
| `callback` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dataFromPCM"><code><span class="field-name">dataFromPCM</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pcmData</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="operator">,</span> <span class="arg-name">sampleFrames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">interleaved</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#dataFromPCM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates AudioData from raw PCM Float32 samples.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [String](/api-docs/clay-web/String/) | | Unique identifier for this audio data  |
| `pcmData` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | | Float32Array containing the raw PCM samples  |
| `sampleFrames` | [Int](/api-docs/clay-web/Int/) | | Number of sample frames (samples per channel)  |
| `channels` | [Int](/api-docs/clay-web/Int/) | | Number of audio channels (1 = mono, 2 = stereo, etc.)  |
| `sampleRate` | [Float](/api-docs/clay-web/Float/) | | Sample rate in Hz (e.g., 44100)  |
| `interleaved` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether the PCM data is interleaved (LRLRLR...) or planar (LLL...RRR...)  |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-web/clay/audio/AudioFormat/) | *(optional)* | Optional audio format information  |
| `callback` | Function | *(optional)* | Optional callback when AudioData is ready |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-web/clay/audio/AudioData/) |

## Private Members

<div class="signature field-var no-description" id="HALF_PI"><code><span class="field-name">HALF_PI</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#HALF_PI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEFAULT_BUS"><code><span class="field-name">DEFAULT_BUS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEFAULT_BUS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="suspended"><code><span class="field-name">suspended</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#suspended"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handleSeq"><code><span class="field-name">handleSeq</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#handleSeq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="instances"><code><span class="field-name">instances</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#instances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="buffers"><code><span class="field-name">buffers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#buffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="busses"><code><span class="field-name">busses</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#busses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="workletModules"><code><span class="field-name">workletModules</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#workletModules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ignoreEndedSoundsTick0"><code><span class="field-name">ignoreEndedSoundsTick0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ignoreEndedSoundsTick0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ignoreEndedSoundsTick1"><code><span class="field-name">ignoreEndedSoundsTick1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ignoreEndedSoundsTick1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingBusWorkletCallbacks"><code><span class="field-name">pendingBusWorkletCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingBusWorkletCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="workletMessageCallbacks"><code><span class="field-name">workletMessageCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#workletMessageCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initWebAudio"><code><span class="field-name">initWebAudio</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">44100</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initWebAudio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `sampleRate` | [Int](/api-docs/clay-web/Int/) | `44100` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createDefaultBus"><code><span class="field-name">createDefaultBus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createDefaultBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="flushBusWorkletReadyCallbacks"><code><span class="field-name">flushBusWorkletReadyCallbacks</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flushBusWorkletReadyCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="soundOf"><code><span class="field-name">soundOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a></code><a class="header-anchor" href="#soundOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [clay.web._WebAudio.WebSound](/api-docs/clay-web/clay/web/_WebAudio/WebSound/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBusGainNode"><code><span class="field-name">getBusGainNode</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/GainNode/" class="type-link">js.html.audio.GainNode</a></code><a class="header-anchor" href="#getBusGainNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [js.html.audio.GainNode](/api-docs/clay-web/js/html/audio/GainNode/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="playBuffer"><code><span class="field-name">playBuffer</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebAudioData/" class="type-link">clay.web._WebAudio.WebAudioData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/" class="type-link">js.html.audio.AudioBufferSourceNode</a></code><a class="header-anchor" href="#playBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [clay.web._WebAudio.WebAudioData](/api-docs/clay-web/clay/web/_WebAudio/WebAudioData/) |

| Returns |
|---------|
| [js.html.audio.AudioBufferSourceNode](/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="playBufferAgain"><code><span class="field-name">playBufferAgain</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">sound</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a><span class="operator">,</span> <span class="arg-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#playBufferAgain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |
| `sound` | [clay.web._WebAudio.WebSound](/api-docs/clay-web/clay/web/_WebAudio/WebSound/) |
| `startTime` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="playInstance"><code><span class="field-name">playInstance</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="operator">,</span> <span class="arg-name">inst</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioInstance/" class="type-link">clay.audio.AudioInstance</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebAudioData/" class="type-link">clay.web._WebAudio.WebAudioData</a><span class="operator">,</span> <span class="arg-name">bufferNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/" class="type-link">js.html.audio.AudioBufferSourceNode</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">DEFAULT_BUS</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#playInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) | |
| `source` | [clay.audio.AudioSource](/api-docs/clay-web/clay/audio/AudioSource/) | |
| `inst` | [clay.audio.AudioInstance](/api-docs/clay-web/clay/audio/AudioInstance/) | |
| `data` | [clay.web._WebAudio.WebAudioData](/api-docs/clay-web/clay/web/_WebAudio/WebAudioData/) | |
| `bufferNode` | [js.html.audio.AudioBufferSourceNode](/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/) | |
| `volume` | [Float](/api-docs/clay-web/Float/) | |
| `loop` | [Bool](/api-docs/clay-web/Bool/) | |
| `busIndex` | [Int](/api-docs/clay-web/Int/) | `DEFAULT_BUS` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stopBuffer"><code><span class="field-name">stopBuffer</span><span class="parenthesis">(</span><span class="arg-name">sound</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sound` | [clay.web._WebAudio.WebSound](/api-docs/clay-web/clay/web/_WebAudio/WebSound/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="soundEnded"><code><span class="field-name">soundEnded</span><span class="parenthesis">(</span><span class="arg-name">sound</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#soundEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sound` | [clay.web._WebAudio.WebSound](/api-docs/clay-web/clay/web/_WebAudio/WebSound/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroySound"><code><span class="field-name">destroySound</span><span class="parenthesis">(</span><span class="arg-name">sound</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/_WebAudio/WebSound/" class="type-link">clay.web._WebAudio.WebSound</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroySound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sound` | [clay.web._WebAudio.WebSound](/api-docs/clay-web/clay/web/_WebAudio/WebSound/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureBusExists"><code><span class="field-name">ensureBusExists</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ensureBusExists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleSourceDestroyed"><code><span class="field-name">handleSourceDestroyed</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSourceDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [clay.audio.AudioSource](/api-docs/clay-web/clay/audio/AudioSource/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleInstanceDestroyed"><code><span class="field-name">handleInstanceDestroyed</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleInstanceDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadDataFromSound"><code><span class="field-name">loadDataFromSound</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadDataFromSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-web/clay/audio/AudioFormat/) | |
| `callback` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadDataFromStream"><code><span class="field-name">loadDataFromStream</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadDataFromStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-web/clay/audio/AudioFormat/) | |
| `callback` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | clay.audio.AudioInstance |
| `:allow` | clay.audio.AudioSource |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: BaseAudio
target: Clay (Web)
permalink: api-docs/clay-web/clay/base/BaseAudio/
---

# BaseAudio

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/base/BaseAudio.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.base.BaseAudio</strong> (Class) → <a href="/api-docs/clay-web/clay/web/WebAudio/">clay.web.WebAudio</a></div>

## Instance Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay app

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSynchronous"><code><span class="field-name">isSynchronous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSynchronous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ready"><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method no-description" id="emitAudioEvent"><code><span class="field-name">emitAudioEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioEvent/" class="type-link">clay.audio.AudioEvent</a><span class="operator">,</span> <span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAudioEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | [clay.audio.AudioEvent](/api-docs/clay-web/clay/audio/AudioEvent/) |
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

## Private Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |


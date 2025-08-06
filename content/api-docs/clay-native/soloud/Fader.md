---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: Fader
target: Clay (Native)
permalink: api-docs/clay-native/soloud/Fader/
---

# Fader

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Fader.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.Fader</strong> (extern class)</div>

Helper class to process faders

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Fader</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Fader](/api-docs/clay-native/soloud/Fader/) |

## Instance Members

<div class="signature field-var has-description" id="mFrom"><code><span class="field-name">mFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value to fade from

<hr class="field-separator" />

<div class="signature field-var has-description" id="mTo"><code><span class="field-name">mTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value to fade to

<hr class="field-separator" />

<div class="signature field-var has-description" id="mDelta"><code><span class="field-name">mDelta</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delta between from and to

<hr class="field-separator" />

<div class="signature field-var has-description" id="mTime"><code><span class="field-name">mTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total time to fade

<hr class="field-separator" />

<div class="signature field-var has-description" id="mStartTime"><code><span class="field-name">mStartTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mStartTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time fading started

<hr class="field-separator" />

<div class="signature field-var has-description" id="mEndTime"><code><span class="field-name">mEndTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mEndTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time fading will end

<hr class="field-separator" />

<div class="signature field-var has-description" id="mCurrent"><code><span class="field-name">mCurrent</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mCurrent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current value. Used in case time rolls over.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mActive"><code><span class="field-name">mActive</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#mActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active flag; 0 means disabled, 1 is active, 2 is LFO, -1 means was active, but stopped

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLFO"><code><span class="field-name">setLFO</span><span class="parenthesis">(</span><span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aStartTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLFO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up LFO

| Name | Type |
|------|------|
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |
| `aStartTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aStartTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up fader

| Name | Type |
|------|------|
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |
| `aStartTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">aCurrentTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the current fading value

| Name | Type |
|------|------|
| `aCurrentTime` | [Time](/api-docs/clay-native/soloud/Time/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_soloud.h" |


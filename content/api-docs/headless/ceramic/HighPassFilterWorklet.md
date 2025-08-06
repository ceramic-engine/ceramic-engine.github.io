---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: HighPassFilterWorklet
target: Headless
permalink: api-docs/headless/ceramic/HighPassFilterWorklet/
---

# HighPassFilterWorklet

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/HighPassFilter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/AudioFilterWorklet/">AudioFilterWorklet</a> → <strong>ceramic.HighPassFilterWorklet</strong> (Class)</div>

The audio processing worklet for the high-pass filter.
Implements a second-order biquad high-pass filter with per-channel processing.

## Instance Members

<div class="signature field-method has-description" id="process"><code><span class="field-name">process</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AudioFilterBuffer/" class="type-link">AudioFilterBuffer</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Process audio buffer in place. Override this method to implement custom filtering.
CAUTION: this may be called from a background thread


| Name | Type | Description |
|------|------|-------------|
| `buffer` | [AudioFilterBuffer](/api-docs/headless/ceramic/AudioFilterBuffer/) | The audio buffer to process (modify in place, planar layout: one channel after another, not interleaved)  |
| `samples` | [Int](/api-docs/headless/Int/) | Number of samples per channel  |
| `channels` | [Int](/api-docs/headless/Int/) | Number of audio channels (1 = mono, 2 = stereo)  |
| `sampleRate` | [Float](/api-docs/headless/Float/) | Sample rate in Hz  |
| `time` | [Float](/api-docs/headless/Float/) | Current playback time in seconds |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `filterId` | [Int](/api-docs/headless/Int/) |
| `bus` | [Int](/api-docs/headless/Int/) |

## Private Members

<div class="signature field-var has-description" id="cutoffFrequency"><code><span class="field-name">cutoffFrequency</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cutoffFrequency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cutoff frequency in Hz.
Frequencies below this value will be attenuated.
Range: 1 Hz to half the sample rate (Nyquist frequency).
Default: 1000 Hz

<hr class="field-separator" />

<div class="signature field-var has-description" id="gain"><code><span class="field-name">gain</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter gain/amplitude multiplier.
Adjusts the overall output level after filtering.
Range: 0.0 to any positive value (1.0 = unity gain).
Default: 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="resonance"><code><span class="field-name">resonance</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#resonance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter resonance/Q factor.
Controls the sharpness of the filter and frequency emphasis at the cutoff.
- 0.707: No resonance (Butterworth response)
- \< 0.707: Gentler rolloff
- \> 0.707: Sharper rolloff with peak at cutoff
Range: 0.1 to 30.0 (higher values = more resonance)
Default: 0.707

<hr class="field-separator" />

<div class="signature field-var no-description" id="x1"><code><span class="field-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#x1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="x2"><code><span class="field-name">x2</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#x2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="y1"><code><span class="field-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#y1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="y2"><code><span class="field-name">y2</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#y2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="a0"><code><span class="field-name">a0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#a0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="a1"><code><span class="field-name">a1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#a1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="a2"><code><span class="field-name">a2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#a2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="b1"><code><span class="field-name">b1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#b1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="b2"><code><span class="field-name">b2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#b2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastCutoff"><code><span class="field-name">lastCutoff</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastCutoff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastQ"><code><span class="field-name">lastQ</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastQ"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastSampleRate"><code><span class="field-name">lastSampleRate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastSampleRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="calculateCoefficients"><code><span class="field-name">calculateCoefficients</span><span class="parenthesis">(</span><span class="arg-name">cutoff</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">q</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#calculateCoefficients"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates biquad filter coefficients for the high-pass response.
Uses the standard audio EQ cookbook formulas for a second-order high-pass filter.



| Name | Type | Description |
|------|------|-------------|
| `cutoff` | [Float](/api-docs/headless/Float/) | Cutoff frequency in Hz  |
| `q` | [Float](/api-docs/headless/Float/) | Quality factor (resonance)  |
| `sampleRate` | [Float](/api-docs/headless/Float/) | Sample rate in Hz |


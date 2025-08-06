---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: HighPassFilter
target: Headless
permalink: api-docs/headless/ceramic/HighPassFilter/
---

# HighPassFilter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/HighPassFilter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/AudioFilter/">AudioFilter</a> → <strong>ceramic.HighPassFilter</strong> (Class)</div>

A high-pass audio filter that attenuates frequencies below a cutoff point.

High-pass filters allow high frequencies to pass through while reducing
or eliminating low frequencies. Common uses include:
- Removing rumble or low-frequency noise
- Creating "tinny" or "telephone" effects
- Frequency band isolation for audio analysis
- Cleaning up muddy audio mixes

The filter uses a biquad implementation for stable, efficient processing
with adjustable resonance (Q factor) for frequency emphasis at the cutoff.

```haxe
// Remove low frequencies below 200Hz
var highPass = new HighPassFilter();
highPass.cutoffFrequency = 200;
highPass.gain = 1.0;

// Create a resonant high-pass effect
var resonantHP = new HighPassFilter();
resonantHP.cutoffFrequency = 1000;
resonantHP.resonance = 5.0;  // Emphasize the cutoff frequency

// Apply to an audio mixer
audioMixer.addFilter(highPass);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/LowPassFilter/">LowPassFilter</a>, <a href="/api-docs/headless/ceramic/AudioFilter/">AudioFilter</a>, <a href="/api-docs/headless/ceramic/AudioMixer/">AudioMixer</a></div>


## Instance Members

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

<div class="signature field-method no-description" id="workletClass"><code><span class="field-name">workletClass</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Class<ceramic/HighPassFilterWorklet>/" class="type-link">Class<ceramic.HighPassFilterWorklet></a></code><a class="header-anchor" href="#workletClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Class<ceramic.HighPassFilterWorklet>](/api-docs/headless/Class<ceramic/HighPassFilterWorklet>/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.AudioFiltersMacro.buildFilter() |
| `:autoBuild` | ceramic.macros.AudioFiltersMacro.buildFilter() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: LowPassFilter
target: Headless
permalink: api-docs/headless/ceramic/LowPassFilter/
---

# LowPassFilter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/LowPassFilter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/AudioFilter/">AudioFilter</a> → <strong>ceramic.LowPassFilter</strong> (Class)</div>

A low-pass audio filter that attenuates frequencies above a cutoff point.

Low-pass filters allow low frequencies to pass through while reducing
or eliminating high frequencies. Common uses include:
- Removing high-frequency noise or hiss
- Creating "muffled" or "underwater" effects
- Simulating sounds heard through walls
- Smoothing harsh digital audio
- Bass isolation for subwoofer systems

The filter uses a biquad implementation for stable, efficient processing
with adjustable resonance (Q factor) for frequency emphasis at the cutoff.

```haxe
// Remove high frequencies above 2000Hz
var lowPass = new LowPassFilter();
lowPass.cutoffFrequency = 2000;
lowPass.gain = 1.0;

// Create a resonant low-pass sweep effect
var sweepFilter = new LowPassFilter();
sweepFilter.resonance = 8.0;  // High resonance for dramatic effect
app.onUpdate(this, delta -> {
    // Sweep cutoff from 200Hz to 5000Hz
    sweepFilter.cutoffFrequency = 200 + (Math.sin(Timer.now) + 1) * 2400;
});

// Apply to an audio mixer
audioMixer.addFilter(lowPass);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/HighPassFilter/">HighPassFilter</a>, <a href="/api-docs/headless/ceramic/AudioFilter/">AudioFilter</a>, <a href="/api-docs/headless/ceramic/AudioMixer/">AudioMixer</a></div>


## Instance Members

<div class="signature field-var has-description" id="cutoffFrequency"><code><span class="field-name">cutoffFrequency</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cutoffFrequency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cutoff frequency in Hz.
Frequencies above this value will be attenuated.
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
- 0.707: No resonance (Butterworth response, flat passband)
- \< 0.707: Gentler rolloff
- \> 0.707: Sharper rolloff with peak at cutoff
- High values (5-30): Creates strong resonant peak (self-oscillation)
Range: 0.1 to 30.0 (higher values = more resonance)
Default: 0.707

<hr class="field-separator" />

<div class="signature field-method no-description" id="workletClass"><code><span class="field-name">workletClass</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Class<ceramic/LowPassFilterWorklet>/" class="type-link">Class<ceramic.LowPassFilterWorklet></a></code><a class="header-anchor" href="#workletClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Class<ceramic.LowPassFilterWorklet>](/api-docs/headless/Class<ceramic/LowPassFilterWorklet>/) |

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


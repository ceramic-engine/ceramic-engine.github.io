---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Audio
target: Headless
permalink: api-docs/headless/ceramic/Audio/
---

# Audio

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Audio.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.Audio</strong> (Class)</div>

Main audio system manager for Ceramic.

This class manages the audio system, including:
- Audio mixers for different buses (channels)
- Audio filters and effects
- Global audio processing

The audio system uses a bus-based architecture where sounds can be
routed through different buses (0, 1, 2, etc.) for separate processing.
Bus 0 is the default/master bus.

Features:
- Multiple audio buses for organizing sounds
- Real-time audio filters (low-pass, high-pass, etc.)
- Thread-safe filter management on native platforms
- Per-bus volume and effect control via mixers

This class is automatically instantiated by the App and should be
accessed via `app.audio`.

```haxe
// Get the master mixer
var masterMixer = app.audio.mixer(0);
masterMixer.volume = 0.8;

// Add a low-pass filter to bus 1
var filter = new LowPassFilter();
filter.frequency = 1000;
app.audio.addFilter(filter, 1);

// Play a sound on bus 1
var sound = assets.sound('music');
sound.mixer = 1;
sound.play();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/AudioMixer/">AudioMixer</a>, <a href="/api-docs/headless/ceramic/AudioFilter/">AudioFilter</a>, <a href="/api-docs/headless/ceramic/Sound/">Sound</a></div>


## Instance Members

<div class="signature field-method has-description" id="mixer"><code><span class="field-name">mixer</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AudioMixer/" class="type-link">AudioMixer</a></code><a class="header-anchor" href="#mixer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get or create an audio mixer for the specified bus.
Mixers are created lazily on first access.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/headless/Int/) | The bus index (0 for master, 1+ for additional buses)  |

| Returns | Description |
|---------|-------------|
| [AudioMixer](/api-docs/headless/ceramic/AudioMixer/) | The audio mixer for the specified bus |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFilter"><code><span class="field-name">addFilter</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AudioFilter/" class="type-link">AudioFilter</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add an audio filter to a specific bus.
Filters are processed in the order they are added.
If the filter is already attached to another bus, it will be moved.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `filter` | [AudioFilter](/api-docs/headless/ceramic/AudioFilter/) | | The filter to add  |
| `bus` | [Int](/api-docs/headless/Int/) | `0` | The bus to add the filter to (0 = master, default)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeFilter"><code><span class="field-name">removeFilter</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AudioFilter/" class="type-link">AudioFilter</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove an audio filter from a specific bus.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `filter` | [AudioFilter](/api-docs/headless/ceramic/AudioFilter/) | | The filter to remove  |
| `bus` | [Int](/api-docs/headless/Int/) | *(optional)* | The bus to remove from (if null, uses filter's current bus) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="filters"><code><span class="field-name">filters</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AudioFilter/" class="type-link">AudioFilter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#filters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get all filters attached to a specific bus.
Returns a copy of the filter array to prevent external modification.


| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/headless/Int/) | The bus to get filters for  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/headless/ceramic/ReadOnlyArray/)<[AudioFilter](/api-docs/headless/ceramic/AudioFilter/)> | Read-only array of filters (empty if bus has no filters) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearFilters"><code><span class="field-name">clearFilters</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearFilters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove all filters from a specific bus.


| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/headless/Int/) | The bus to clear of all filters |

## Private Members

<div class="signature field-var has-description" id="mixers"><code><span class="field-name">mixers</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AudioMixer/" class="type-link">AudioMixer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mixers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of audio mixers indexed by bus number.
Created lazily as buses are accessed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="busFilters"><code><span class="field-name">busFilters</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/AudioFilter/" class="type-link">AudioFilter</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#busFilters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filters attached to each bus.
First dimension is bus index, second is list of filters for that bus.

<hr class="field-separator" />

<div class="signature field-method no-description" id="initMixerIfNeeded"><code><span class="field-name">initMixerIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initMixerIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Private constructor - Audio is created internally by App.
Access via `app.audio`.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


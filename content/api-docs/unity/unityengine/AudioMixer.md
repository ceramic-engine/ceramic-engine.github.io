---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioMixer
target: Unity
permalink: api-docs/unity/unityengine/AudioMixer/
---

# AudioMixer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/AudioMixer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.AudioMixer</strong> (extern class)</div>

Manages audio routing and processing through a graph of mixer groups.
AudioMixers allow complex audio routing with effects, volume control,
and dynamic mixing of multiple audio sources.

In Ceramic's Unity backend, AudioMixers are used to implement the
audio bus system, allowing grouped control of sounds with effects.

Key features:
- Hierarchical mixing groups
- Built-in audio effects (reverb, compression, etc.)
- Exposed parameters for runtime control
- Snapshot system for mixing states

Basic usage:
```haxe
// AudioMixers are typically configured in Unity Editor
// and accessed through the backend's bus system
var groups = mixer.FindMatchingGroups("Master/SFX");
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioMixerGroup/">AudioMixerGroup</a>, <a href="/api-docs/unity/unityengine/AudioSource/">AudioSource</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="FindMatchingGroups"><div class="plugin-name">unity</div><code><span class="field-name">FindMatchingGroups</span><span class="parenthesis">(</span><span class="arg-name">subPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/AudioMixerGroup/" class="type-link">AudioMixerGroup</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#FindMatchingGroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Searches for mixer groups matching the given path pattern.
Useful for dynamically finding groups at runtime.



| Name | Type | Description |
|------|------|-------------|
| `subPath` | [String](/api-docs/unity/String/) | Path pattern to search for. Can be: - Full path: "Master/Music/Ambient" - Partial path: "Music" (finds all groups named Music) - Wildcard: "Master/*" (finds all direct children)  |

| Returns | Description |
|---------|-------------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[AudioMixerGroup](/api-docs/unity/unityengine/AudioMixerGroup/)> | Array of matching AudioMixerGroup objects * Finding all SFX groups: ```haxe var sfxGroups = mixer.FindMatchingGroups("SFX"); for (group in sfxGroups) { // Assign audio sources to these groups } ``` * Note: Returns empty array if no matches found. |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


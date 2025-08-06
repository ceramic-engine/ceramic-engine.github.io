---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioMixerGroup
target: Unity
permalink: api-docs/unity/unityengine/AudioMixerGroup/
---

# AudioMixerGroup

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/AudioMixerGroup.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.AudioMixerGroup</strong> (extern class)</div>

Represents a routing target within an AudioMixer.
Groups allow sounds to be processed together with shared effects and volume.

AudioMixerGroups form a hierarchy within an AudioMixer, where:
- Each group can have child groups
- Audio flows from children to parents
- Effects are applied at each group level
- Final output goes through the Master group

In Ceramic's Unity backend, these groups implement the audio bus system,
allowing sounds to be categorized (Music, SFX, UI, etc.) and controlled
as groups with individual volume and effects.

Typical hierarchy:
```
Master
├── Music
│   ├── Background
│   └── Stingers
├── SFX
│   ├── Player
│   ├── Enemies
│   └── Environment
└── UI
```

Note: AudioMixerGroups are created and configured in Unity Editor,
not through code. This class provides runtime access only.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioMixer/">AudioMixer</a>, <a href="/api-docs/unity/unityengine/AudioSource/">AudioSource</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


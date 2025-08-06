---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Object
target: Unity
permalink: api-docs/unity/unityengine/Object/
---

# Object

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Object.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Object</strong> (extern class) → <a href="/api-docs/unity/unityengine/AudioClip/">AudioClip</a>, <a href="/api-docs/unity/unityengine/AudioMixer/">AudioMixer</a>, <a href="/api-docs/unity/unityengine/AudioMixerGroup/">AudioMixerGroup</a>, <a href="/api-docs/unity/unityengine/Component/">Component</a>, <a href="/api-docs/unity/unityengine/GameObject/">GameObject</a>, <a href="/api-docs/unity/unityengine/Mesh/">Mesh</a>, <a href="/api-docs/unity/unityengine/TextAsset/">TextAsset</a>, <a href="/api-docs/unity/unityengine/Texture/">Texture</a></div>

Unity Object class extern binding for Ceramic.
Base class for all Unity objects that can exist in scenes.

This is a minimal binding that includes object lifecycle management
methods used by the Ceramic Unity backend.

## Static Members

<div class="signature field-method has-description has-plugin" id="Destroy"><div class="plugin-name">unity</div><code><span class="field-name">Destroy</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="#" class="type-link">Object</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a GameObject, component or asset after a specified delay.
The object will be destroyed at the beginning of the next frame
after the delay has passed.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `obj` | [Object](/api-docs/unity/unityengine/Object/) | | The object to destroy  |
| `t` | [Single](/api-docs/unity/Single/) | `0.0` | Optional delay in seconds before destroying the object (default: 0.0) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="DestroyImmediate"><div class="plugin-name">unity</div><code><span class="field-name">DestroyImmediate</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="#" class="type-link">Object</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowDestroyingAssets</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DestroyImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the object immediately. You should use Destroy instead.
This function should only be used when writing editor code or
when you need to destroy an object during serialization callbacks.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `obj` | [Object](/api-docs/unity/unityengine/Object/) | | The object to destroy immediately  |
| `allowDestroyingAssets` | [Bool](/api-docs/unity/Bool/) | `false` | If true, allows destroying assets (default: false) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="DontDestroyOnLoad"><div class="plugin-name">unity</div><code><span class="field-name">DontDestroyOnLoad</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="#" class="type-link">Object</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DontDestroyOnLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Makes the object persistent across scene loads.
The object will not be destroyed when loading a new scene.
Commonly used for singleton managers or persistent game state.



| Name | Type | Description |
|------|------|-------------|
| `target` | [Object](/api-docs/unity/unityengine/Object/) | The object to make persistent |

## Instance Members

<div class="signature field-method has-description has-plugin" id="GetInstanceID"><div class="plugin-name">unity</div><code><span class="field-name">GetInstanceID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetInstanceID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the instance ID of the object.
The instance ID is a unique identifier for each object instance,
guaranteed to be unique throughout the lifetime of the object.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | Unique integer identifier for this object instance |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


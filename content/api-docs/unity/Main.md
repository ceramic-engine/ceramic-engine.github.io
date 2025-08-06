---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Main
target: Unity
permalink: api-docs/unity/Main/
---

# Main

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/Main.hx">View source</a></div>

<div class="type-hierarchy"><strong>Main</strong> (Class)</div>

Main entry point for the Unity backend integration.
Handles initialization, update loop, and synchronization with Unity's lifecycle.
Supports both standard Unity and Universal Render Pipeline (URP) configurations.

## Static Members

<div class="signature field-var has-description has-plugin" id="project"><div class="plugin-name">unity</div><code><span class="field-name">project</span><span class="operator">:</span> <a href="/api-docs/unity/Project/" class="type-link">Project</a></code><a class="header-anchor" href="#project"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic project instance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="monoBehaviour"><div class="plugin-name">unity</div><code><span class="field-name">monoBehaviour</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/MonoBehaviour/" class="type-link">unityengine.MonoBehaviour</a></code><a class="header-anchor" href="#monoBehaviour"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unity MonoBehaviour instance for coroutines and Unity API access.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="audioMixer"><div class="plugin-name">unity</div><code><span class="field-name">audioMixer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioMixer/" class="type-link">unityengine.AudioMixer</a></code><a class="header-anchor" href="#audioMixer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unity AudioMixer for global audio processing.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sync"><div class="plugin-name">unity</div><code><span class="field-name">sync</span><span class="parenthesis">(</span><span class="arg-name">monoBehaviour</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/MonoBehaviour/" class="type-link">unityengine.MonoBehaviour</a><span class="operator">,</span> <span class="arg-name">audioMixer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioMixer/" class="type-link">unityengine.AudioMixer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronizes with Unity components and initializes Ceramic if needed.
Called from Unity's C# side to establish the connection.


| Name | Type | Description |
|------|------|-------------|
| `monoBehaviour` | [unityengine.MonoBehaviour](/api-docs/unity/unityengine/MonoBehaviour/) | Unity MonoBehaviour for lifecycle hooks  |
| `audioMixer` | [unityengine.AudioMixer](/api-docs/unity/unityengine/AudioMixer/) | Unity AudioMixer for audio processing |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="main"><div class="plugin-name">unity</div><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main initialization function for the Ceramic Unity backend.
Sets up project settings, initializes the app, and starts the update loop.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="regularUpdate"><div class="plugin-name">unity</div><code><span class="field-name">regularUpdate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#regularUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular update for Universal Render Pipeline.
Handles screen and input updates separately from rendering.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="renderPassUpdate"><div class="plugin-name">unity</div><code><span class="field-name">renderPassUpdate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#renderPassUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Render pass update for Universal Render Pipeline.
Called during the render pass to update and render the app.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">unity</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main update loop for the Ceramic app.
Processes input, updates app state, and triggers rendering.
Includes error handling to mark critical errors.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


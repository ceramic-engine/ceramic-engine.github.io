---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: RTHandle
target: Unity
permalink: api-docs/unity/unityengine/RTHandle/
---

# RTHandle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/RTHandle.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.RTHandle</strong> (extern class)</div>

A handle to a render texture in Unity's Scriptable Render Pipeline.
RTHandles provide an abstraction over RenderTextures with automatic
scaling and resource management.

Part of Unity's Render Pipeline (URP/HDRP) infrastructure, RTHandles
enable dynamic resolution scaling and efficient texture pooling.

In Ceramic's Unity backend, RTHandles may be used when integrating
with Unity's modern rendering pipelines for advanced effects.

Key benefits over RenderTexture:
- Automatic resolution scaling with screen size
- Memory pooling and reuse
- Integration with SRP render passes
- Dynamic resolution support

Note: This is primarily used internally by Unity's rendering
systems and advanced custom render passes.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/RenderTexture/">RenderTexture</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


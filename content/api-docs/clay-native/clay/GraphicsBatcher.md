---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GraphicsBatcher
target: Clay (Native)
permalink: api-docs/clay-native/clay/GraphicsBatcher/
---

# GraphicsBatcher

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/GraphicsBatcher.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.GraphicsBatcher</strong> (Typedef)</div>

Platform-specific graphics batcher for batched rendering.

On OpenGL platforms, this resolves to GLGraphicsBatcher which provides
optimized vertex batching and draw call submission using GL APIs.


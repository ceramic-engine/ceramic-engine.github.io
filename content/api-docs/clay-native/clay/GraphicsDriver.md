---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GraphicsDriver
target: Clay (Native)
permalink: api-docs/clay-native/clay/GraphicsDriver/
---

# GraphicsDriver

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/GraphicsDriver.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.GraphicsDriver</strong> (Typedef)</div>

Platform-specific graphics driver for GPU resource management.

On OpenGL platforms, this resolves to GLGraphicsDriver which provides
texture, shader, and render target management using GL APIs.

Access the driver instance via Clay.app.graphics.


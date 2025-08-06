---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Color
target: Unity
permalink: api-docs/unity/unityengine/Color/
---

# Color

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Color.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Color</strong> (extern class)</div>

Unity Color struct extern binding for Ceramic.
Represents RGBA color values with components in the 0-1 range.

Unity uses floating-point color values where each component
(red, green, blue, alpha) ranges from 0.0 to 1.0.
This binding provides the constructor needed by the Ceramic backend.

## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Color with the specified RGBA values.
All components should be in the range 0.0 to 1.0.
Values outside this range are allowed but may produce
unexpected results in rendering.



| Name | Type | Description |
|------|------|-------------|
| `r` | [Single](/api-docs/unity/Single/) | Red component (0.0 = no red, 1.0 = full red)  |
| `g` | [Single](/api-docs/unity/Single/) | Green component (0.0 = no green, 1.0 = full green)  |
| `b` | [Single](/api-docs/unity/Single/) | Blue component (0.0 = no blue, 1.0 = full blue)  |
| `a` | [Single](/api-docs/unity/Single/) | Alpha component (0.0 = transparent, 1.0 = opaque) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


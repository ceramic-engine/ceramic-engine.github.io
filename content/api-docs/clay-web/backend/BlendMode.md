---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: BlendMode
target: Clay (Web)
permalink: api-docs/clay-web/backend/BlendMode/
---

# BlendMode

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/BlendMode.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.BlendMode</strong> (Typedef)</div>

Type alias for the Clay engine's blend mode enumeration.

Blend modes determine how pixels are combined when drawing one visual
on top of another. This typedef maps to Clay's internal BlendMode type
which provides standard blending operations like:
- Normal (alpha blending)
- Add (additive blending)
- Multiply (multiplicative blending)
- Screen
- And other Photoshop-style blend modes

The actual blend mode implementation uses OpenGL/WebGL blend functions
to achieve the desired pixel combination effects.

<div class="see"><strong>See:</strong> ceramic.Blending For the high-level blending API, Draw.setBlendMode() For applying blend modes during rendering</div>



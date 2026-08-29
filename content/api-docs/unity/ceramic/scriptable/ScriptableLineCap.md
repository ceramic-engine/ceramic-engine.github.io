---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableLineCap
target: Unity
permalink: api-docs/unity/ceramic/scriptable/ScriptableLineCap/
---

# ScriptableLineCap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableLineCap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableLineCap</strong> (Class)</div>

Scriptable wrapper for LineCap to expose line cap modes to scripts.

This class provides constants that define how line ends are rendered.
In scripts, this type is exposed as `LineCap` (without the Scriptable prefix).

<div class="see"><strong>See:</strong> ceramic.LineCap The actual implementation, ceramic.Line For using caps with lines</div>


## Static Members

<div class="signature field-var has-description" id="BUTT"><code><span class="field-name">BUTT</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BUTT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Line ends exactly at the endpoint.

<hr class="field-separator" />

<div class="signature field-var has-description" id="SQUARE"><code><span class="field-name">SQUARE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SQUARE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Line extends past the endpoint by half the line thickness.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ROUND"><code><span class="field-name">ROUND</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ROUND"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Semicircular cap at the endpoint.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


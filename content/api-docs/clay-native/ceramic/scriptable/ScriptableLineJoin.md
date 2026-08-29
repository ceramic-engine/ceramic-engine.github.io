---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableLineJoin
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/scriptable/ScriptableLineJoin/
---

# ScriptableLineJoin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableLineJoin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableLineJoin</strong> (Class)</div>

Scriptable wrapper for LineJoin to expose line join modes to scripts.

This class provides constants that define how line segments are joined
at corners. In scripts, this type is exposed as `LineJoin` (without the
Scriptable prefix).

<div class="see"><strong>See:</strong> ceramic.LineJoin The actual implementation, ceramic.Line For using joins with lines</div>


## Static Members

<div class="signature field-var has-description" id="MITER"><code><span class="field-name">MITER</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MITER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates sharp, pointed corners (limited by miterLimit).

<hr class="field-separator" />

<div class="signature field-var has-description" id="BEVEL"><code><span class="field-name">BEVEL</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEVEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates flat, cut-off corners.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ROUND"><code><span class="field-name">ROUND</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ROUND"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates smooth circular arcs at corners.


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: LineJoin
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LineJoin/
---

# LineJoin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/LineJoin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LineJoin</strong> (Typedef)</div>

Defines how line segments are joined at corners.

This is a typedef to polyline.StrokeJoin with the following values:
- MITER: Creates sharp, pointed corners
- BEVEL: Creates flat, cut-off corners

Used by the Line class to control corner rendering.

<div class="see"><strong>See:</strong> Line.join, Line.miterLimit</div>



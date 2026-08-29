---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: LineJoin
target: Headless
permalink: api-docs/headless/ceramic/LineJoin/
---

# LineJoin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/LineJoin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LineJoin</strong> (Abstract)</div>

Defines how line segments are joined at corners.

- MITER: Creates sharp, pointed corners (limited by miterLimit)
- BEVEL: Creates flat, cut-off corners
- ROUND: Creates smooth circular arcs at corners

Used by the Line class to control corner rendering.

<div class="see"><strong>See:</strong> Line.join, Line.miterLimit</div>


## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


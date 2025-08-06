---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: CurveTimeline1
target: Clay (Web)
permalink: api-docs/clay-web/spine/CurveTimeline1/
---

# CurveTimeline1

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/spine/Timeline/">Timeline</a> → <a href="/api-docs/clay-web/spine/CurveTimeline/">CurveTimeline</a> → <strong>spine.CurveTimeline1</strong> (Class) → <a href="/api-docs/clay-web/spine/AlphaTimeline/">AlphaTimeline</a>, <a href="/api-docs/clay-web/spine/PathConstraintPositionTimeline/">PathConstraintPositionTimeline</a>, <a href="/api-docs/clay-web/spine/PathConstraintSpacingTimeline/">PathConstraintSpacingTimeline</a>, <a href="/api-docs/clay-web/spine/RotateTimeline/">RotateTimeline</a>, <a href="/api-docs/clay-web/spine/ScaleXTimeline/">ScaleXTimeline</a>, <a href="/api-docs/clay-web/spine/ScaleYTimeline/">ScaleYTimeline</a>, <a href="/api-docs/clay-web/spine/ShearXTimeline/">ShearXTimeline</a>, <a href="/api-docs/clay-web/spine/ShearYTimeline/">ShearYTimeline</a>, <a href="/api-docs/clay-web/spine/TranslateXTimeline/">TranslateXTimeline</a>, <a href="/api-docs/clay-web/spine/TranslateYTimeline/">TranslateYTimeline</a></div>

The base class for a {@link CurveTimeline} that sets one property.

## Static Members

<div class="signature field-var no-description has-plugin" id="ENTRIES"><div class="plugin-name">spine</div><code><span class="field-name">ENTRIES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ENTRIES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="VALUE"><div class="plugin-name">spine</div><code><span class="field-name">VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="LINEAR"><div class="plugin-name">spine</div><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STEPPED"><div class="plugin-name">spine</div><code><span class="field-name">STEPPED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STEPPED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER_SIZE"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="getFrameEntries"><div class="plugin-name">spine</div><code><span class="field-name">getFrameEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and value for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-web/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/clay-web/Float/) | The frame time in seconds. |
| `value` | [Float](/api-docs/clay-web/Float/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getCurveValue"><div class="plugin-name">spine</div><code><span class="field-name">getCurveValue</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getCurveValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the interpolated value for the specified time.

| Name | Type |
|------|------|
| `time` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">propertyId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `frameCount` | [Int](/api-docs/clay-web/Int/) |  |
| `bezierCount` | [Int](/api-docs/clay-web/Int/) | The maximum number of Bezier curves. See { |
| `propertyId` | [String](/api-docs/clay-web/String/) | Unique identifier for the property the timeline modifies. |


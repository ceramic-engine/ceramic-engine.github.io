---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: CurveTimeline
target: Clay (Native)
permalink: api-docs/clay-native/spine/CurveTimeline/
---

# CurveTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/Timeline/">Timeline</a> → <strong>spine.CurveTimeline</strong> (Class) → <a href="/api-docs/clay-native/spine/CurveTimeline1/">CurveTimeline1</a>, <a href="/api-docs/clay-native/spine/CurveTimeline2/">CurveTimeline2</a>, <a href="/api-docs/clay-native/spine/DeformTimeline/">DeformTimeline</a>, <a href="/api-docs/clay-native/spine/IkConstraintTimeline/">IkConstraintTimeline</a>, <a href="/api-docs/clay-native/spine/PathConstraintMixTimeline/">PathConstraintMixTimeline</a>, <a href="/api-docs/clay-native/spine/RGB2Timeline/">RGB2Timeline</a>, <a href="/api-docs/clay-native/spine/RGBA2Timeline/">RGBA2Timeline</a>, <a href="/api-docs/clay-native/spine/RGBATimeline/">RGBATimeline</a>, <a href="/api-docs/clay-native/spine/RGBTimeline/">RGBTimeline</a>, <a href="/api-docs/clay-native/spine/TransformConstraintTimeline/">TransformConstraintTimeline</a></div>

The base class for timelines that interpolate between frame values using stepped, linear, or a Bezier curve.

## Static Members

<div class="signature field-var no-description has-plugin" id="LINEAR"><div class="plugin-name">spine</div><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STEPPED"><div class="plugin-name">spine</div><code><span class="field-name">STEPPED</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STEPPED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER_SIZE"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="curves"><div class="plugin-name">spine</div><code><span class="field-name">curves</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#curves"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setLinear"><div class="plugin-name">spine</div><code><span class="field-name">setLinear</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the specified frame to linear interpolation.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount - 1</code>, inclusive. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setStepped"><div class="plugin-name">spine</div><code><span class="field-name">setStepped</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStepped"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the specified frame to stepped interpolation.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount - 1</code>, inclusive. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getCurveType"><div class="plugin-name">spine</div><code><span class="field-name">getCurveType</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getCurveType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the interpolation type for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount - 1</code>, inclusive.  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | { |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shrink"><div class="plugin-name">spine</div><code><span class="field-name">shrink</span><span class="parenthesis">(</span><span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shrink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shrinks the storage for Bezier curves, for use when <code>bezierCount</code> (specified in the constructor) was larger
than the actual number of Bezier curves.

| Name | Type |
|------|------|
| `bezierCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBezier"><div class="plugin-name">spine</div><code><span class="field-name">setBezier</span><span class="parenthesis">(</span><span class="arg-name">bezier</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBezier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the segments for the specified Bezier curve. For timelines that modify multiple values, there may be more than
one curve per frame.


| Name | Type | Description |
|------|------|-------------|
| `bezier` | [Int](/api-docs/clay-native/Int/) | The ordinal of this Bezier curve for this timeline, between 0 and <code>bezierCount - 1</code> (specified in the constructor), inclusive.  |
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount - 1</code>, inclusive.  |
| `value` | [Int](/api-docs/clay-native/Int/) | The index of the value for the frame this curve is used for.  |
| `time1` | [Float](/api-docs/clay-native/Float/) | The time for the first key.  |
| `value1` | [Float](/api-docs/clay-native/Float/) | The value for the first key.  |
| `cx1` | [Float](/api-docs/clay-native/Float/) | The time for the first Bezier handle.  |
| `cy1` | [Float](/api-docs/clay-native/Float/) | The value for the first Bezier handle.  |
| `cx2` | [Float](/api-docs/clay-native/Float/) | The time of the second Bezier handle.  |
| `cy2` | [Float](/api-docs/clay-native/Float/) | The value for the second Bezier handle.  |
| `time2` | [Float](/api-docs/clay-native/Float/) | The time for the second key.  |
| `value2` | [Float](/api-docs/clay-native/Float/) | The value for the second key. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBezierValue"><div class="plugin-name">spine</div><code><span class="field-name">getBezierValue</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valueOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getBezierValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Bezier interpolated value for the specified time.


| Name | Type | Description |
|------|------|-------------|
| `time` | [Float](/api-docs/clay-native/Float/) |  |
| `frameIndex` | [Int](/api-docs/clay-native/Int/) | The index into { |
| `valueOffset` | [Int](/api-docs/clay-native/Int/) | The offset from <code>frameIndex</code> to the value this curve is used for.  |
| `i` | [Int](/api-docs/clay-native/Int/) | The index of the Bezier segments. See { |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">propertyIds</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `frameCount` | [Int](/api-docs/clay-native/Int/) |  |
| `bezierCount` | [Int](/api-docs/clay-native/Int/) | The maximum number of Bezier curves. See { |
| `propertyIds` | [spine.support.utils.StringArray](/api-docs/clay-native/spine/support/utils/StringArray/) | Unique identifiers for the properties the timeline modifies. |


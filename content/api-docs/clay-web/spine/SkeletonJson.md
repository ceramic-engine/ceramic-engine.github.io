---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SkeletonJson
target: Clay (Web)
permalink: api-docs/clay-web/spine/SkeletonJson/
---

# SkeletonJson

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/SkeletonJson.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/spine/SkeletonLoader/">SkeletonLoader</a> → <strong>spine.SkeletonJson</strong> (Class)</div>

Loads skeleton data in the Spine JSON format.
<p>
JSON is human readable but the binary format is much smaller on disk and faster to load. See {@link SkeletonBinary}.
<p>
See <a href="http://esotericsoftware.com/spine-json-format">Spine JSON format</a> and
<a href="http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data">JSON and binary data</a> in the Spine
Runtimes Guide.

## Static Members

<div class="signature field-method no-description has-plugin" id="setBezier"><div class="plugin-name">spine</div><code><span class="field-name">setBezier</span><span class="parenthesis">(</span><span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/CurveTimeline/" class="type-link">CurveTimeline</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezier</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBezier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `timeline` | [CurveTimeline](/api-docs/clay-web/spine/CurveTimeline/) |
| `frame` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Int](/api-docs/clay-web/Int/) |
| `bezier` | [Int](/api-docs/clay-web/Int/) |
| `time1` | [Float](/api-docs/clay-web/Float/) |
| `value1` | [Float](/api-docs/clay-web/Float/) |
| `cx1` | [Float](/api-docs/clay-web/Float/) |
| `cy1` | [Float](/api-docs/clay-web/Float/) |
| `cx2` | [Float](/api-docs/clay-web/Float/) |
| `cy2` | [Float](/api-docs/clay-web/Float/) |
| `time2` | [Float](/api-docs/clay-web/Float/) |
| `value2` | [Float](/api-docs/clay-web/Float/) |

## Instance Members

<div class="signature field-method no-description has-plugin" id="readSkeletonData"><div class="plugin-name">spine</div><code><span class="field-name">readSkeletonData</span><span class="parenthesis">(</span><span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SkeletonData/" class="type-link">SkeletonData</a></code><a class="header-anchor" href="#readSkeletonData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `root` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |

| Returns |
|---------|
| [SkeletonData](/api-docs/clay-web/spine/SkeletonData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readCurve"><div class="plugin-name">spine</div><code><span class="field-name">readCurve</span><span class="parenthesis">(</span><span class="arg-name">curve</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/CurveTimeline/" class="type-link">CurveTimeline</a><span class="operator">,</span> <span class="arg-name">bezier</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readCurve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `curve` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |
| `timeline` | [CurveTimeline](/api-docs/clay-web/spine/CurveTimeline/) |
| `bezier` | [Int](/api-docs/clay-web/Int/) |
| `frame` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Int](/api-docs/clay-web/Int/) |
| `time1` | [Float](/api-docs/clay-web/Float/) |
| `time2` | [Float](/api-docs/clay-web/Float/) |
| `value1` | [Float](/api-docs/clay-web/Float/) |
| `value2` | [Float](/api-docs/clay-web/Float/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">attachmentLoader</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/AttachmentLoader/" class="type-link">spine.attachments.AttachmentLoader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attachmentLoader` | [spine.attachments.AttachmentLoader](/api-docs/clay-web/spine/attachments/AttachmentLoader/) |

## Private Members

<div class="signature field-method no-description has-plugin" id="readAttachment"><div class="plugin-name">spine</div><code><span class="field-name">readAttachment</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a><span class="operator">,</span> <span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SkeletonData/" class="type-link">SkeletonData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#readAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |
| `skin` | [Skin](/api-docs/clay-web/spine/Skin/) |
| `slotIndex` | [Int](/api-docs/clay-web/Int/) |
| `name` | [String](/api-docs/clay-web/String/) |
| `skeletonData` | [SkeletonData](/api-docs/clay-web/spine/SkeletonData/) |

| Returns |
|---------|
| [spine.attachments.Attachment](/api-docs/clay-web/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readVertices"><div class="plugin-name">spine</div><code><span class="field-name">readVertices</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/VertexAttachment/" class="type-link">spine.attachments.VertexAttachment</a><span class="operator">,</span> <span class="arg-name">verticesLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |
| `attachment` | [spine.attachments.VertexAttachment](/api-docs/clay-web/spine/attachments/VertexAttachment/) |
| `verticesLength` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readAnimation"><div class="plugin-name">spine</div><code><span class="field-name">readAnimation</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SkeletonData/" class="type-link">SkeletonData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |
| `name` | [String](/api-docs/clay-web/String/) |
| `skeletonData` | [SkeletonData](/api-docs/clay-web/spine/SkeletonData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readTimeline"><div class="plugin-name">spine</div><code><span class="field-name">readTimeline</span><span class="parenthesis">(</span><span class="arg-name">keyMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/CurveTimeline1/" class="type-link">CurveTimeline1</a><span class="operator">,</span> <span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Timeline/" class="type-link">Timeline</a></code><a class="header-anchor" href="#readTimeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyMap` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |
| `timeline` | [CurveTimeline1](/api-docs/clay-web/spine/CurveTimeline1/) |
| `defaultValue` | [Float](/api-docs/clay-web/Float/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Timeline](/api-docs/clay-web/spine/Timeline/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readTimeline2"><div class="plugin-name">spine</div><code><span class="field-name">readTimeline2</span><span class="parenthesis">(</span><span class="arg-name">keyMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/CurveTimeline2/" class="type-link">CurveTimeline2</a><span class="operator">,</span> <span class="arg-name">name1</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name2</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Timeline/" class="type-link">Timeline</a></code><a class="header-anchor" href="#readTimeline2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyMap` | [spine.support.utils.JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) |
| `timeline` | [CurveTimeline2](/api-docs/clay-web/spine/CurveTimeline2/) |
| `name1` | [String](/api-docs/clay-web/String/) |
| `name2` | [String](/api-docs/clay-web/String/) |
| `defaultValue` | [Float](/api-docs/clay-web/Float/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Timeline](/api-docs/clay-web/spine/Timeline/) |


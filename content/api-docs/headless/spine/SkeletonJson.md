---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SkeletonJson
target: Headless
permalink: api-docs/headless/spine/SkeletonJson/
---

# SkeletonJson

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/SkeletonJson.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/spine/SkeletonLoader/">SkeletonLoader</a> → <strong>spine.SkeletonJson</strong> (Class)</div>

Loads skeleton data in the Spine JSON format.
<p>
JSON is human readable but the binary format is much smaller on disk and faster to load. See {@link SkeletonBinary}.
<p>
See <a href="http://esotericsoftware.com/spine-json-format">Spine JSON format</a> and
<a href="http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data">JSON and binary data</a> in the Spine
Runtimes Guide.

## Static Members

<div class="signature field-method no-description has-plugin" id="setBezier"><div class="plugin-name">spine</div><code><span class="field-name">setBezier</span><span class="parenthesis">(</span><span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/headless/spine/CurveTimeline/" class="type-link">CurveTimeline</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezier</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBezier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `timeline` | [CurveTimeline](/api-docs/headless/spine/CurveTimeline/) |
| `frame` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |
| `bezier` | [Int](/api-docs/headless/Int/) |
| `time1` | [Float](/api-docs/headless/Float/) |
| `value1` | [Float](/api-docs/headless/Float/) |
| `cx1` | [Float](/api-docs/headless/Float/) |
| `cy1` | [Float](/api-docs/headless/Float/) |
| `cx2` | [Float](/api-docs/headless/Float/) |
| `cy2` | [Float](/api-docs/headless/Float/) |
| `time2` | [Float](/api-docs/headless/Float/) |
| `value2` | [Float](/api-docs/headless/Float/) |

## Instance Members

<div class="signature field-method no-description has-plugin" id="readSkeletonData"><div class="plugin-name">spine</div><code><span class="field-name">readSkeletonData</span><span class="parenthesis">(</span><span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">SkeletonData</a></code><a class="header-anchor" href="#readSkeletonData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `root` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |

| Returns |
|---------|
| [SkeletonData](/api-docs/headless/spine/SkeletonData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readCurve"><div class="plugin-name">spine</div><code><span class="field-name">readCurve</span><span class="parenthesis">(</span><span class="arg-name">curve</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/headless/spine/CurveTimeline/" class="type-link">CurveTimeline</a><span class="operator">,</span> <span class="arg-name">bezier</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readCurve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `curve` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |
| `timeline` | [CurveTimeline](/api-docs/headless/spine/CurveTimeline/) |
| `bezier` | [Int](/api-docs/headless/Int/) |
| `frame` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |
| `time1` | [Float](/api-docs/headless/Float/) |
| `time2` | [Float](/api-docs/headless/Float/) |
| `value1` | [Float](/api-docs/headless/Float/) |
| `value2` | [Float](/api-docs/headless/Float/) |
| `scale` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">attachmentLoader</span><span class="operator">:</span> <a href="/api-docs/headless/spine/attachments/AttachmentLoader/" class="type-link">spine.attachments.AttachmentLoader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attachmentLoader` | [spine.attachments.AttachmentLoader](/api-docs/headless/spine/attachments/AttachmentLoader/) |

## Private Members

<div class="signature field-method no-description has-plugin" id="readAttachment"><div class="plugin-name">spine</div><code><span class="field-name">readAttachment</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Skin/" class="type-link">Skin</a><span class="operator">,</span> <span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">SkeletonData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#readAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |
| `skin` | [Skin](/api-docs/headless/spine/Skin/) |
| `slotIndex` | [Int](/api-docs/headless/Int/) |
| `name` | [String](/api-docs/headless/String/) |
| `skeletonData` | [SkeletonData](/api-docs/headless/spine/SkeletonData/) |

| Returns |
|---------|
| [spine.attachments.Attachment](/api-docs/headless/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readVertices"><div class="plugin-name">spine</div><code><span class="field-name">readVertices</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/headless/spine/attachments/VertexAttachment/" class="type-link">spine.attachments.VertexAttachment</a><span class="operator">,</span> <span class="arg-name">verticesLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |
| `attachment` | [spine.attachments.VertexAttachment](/api-docs/headless/spine/attachments/VertexAttachment/) |
| `verticesLength` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readAnimation"><div class="plugin-name">spine</div><code><span class="field-name">readAnimation</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">SkeletonData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |
| `name` | [String](/api-docs/headless/String/) |
| `skeletonData` | [SkeletonData](/api-docs/headless/spine/SkeletonData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readTimeline"><div class="plugin-name">spine</div><code><span class="field-name">readTimeline</span><span class="parenthesis">(</span><span class="arg-name">keyMap</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/headless/spine/CurveTimeline1/" class="type-link">CurveTimeline1</a><span class="operator">,</span> <span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Timeline/" class="type-link">Timeline</a></code><a class="header-anchor" href="#readTimeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyMap` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |
| `timeline` | [CurveTimeline1](/api-docs/headless/spine/CurveTimeline1/) |
| `defaultValue` | [Float](/api-docs/headless/Float/) |
| `scale` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Timeline](/api-docs/headless/spine/Timeline/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readTimeline2"><div class="plugin-name">spine</div><code><span class="field-name">readTimeline2</span><span class="parenthesis">(</span><span class="arg-name">keyMap</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/headless/spine/CurveTimeline2/" class="type-link">CurveTimeline2</a><span class="operator">,</span> <span class="arg-name">name1</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name2</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Timeline/" class="type-link">Timeline</a></code><a class="header-anchor" href="#readTimeline2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyMap` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |
| `timeline` | [CurveTimeline2](/api-docs/headless/spine/CurveTimeline2/) |
| `name1` | [String](/api-docs/headless/String/) |
| `name2` | [String](/api-docs/headless/String/) |
| `defaultValue` | [Float](/api-docs/headless/Float/) |
| `scale` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Timeline](/api-docs/headless/spine/Timeline/) |


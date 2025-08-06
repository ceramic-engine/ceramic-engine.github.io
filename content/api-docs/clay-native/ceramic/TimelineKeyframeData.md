---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineKeyframeData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TimelineKeyframeData/
---

# TimelineKeyframeData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineKeyframeData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TimelineKeyframeData</strong> (Typedef)</div>

Data structure representing a keyframe in serialized form.

This typedef is used for storing and loading keyframe data,
typically from fragment files or other data sources. It contains
the raw data that gets converted into typed TimelineKeyframe
instances at runtime.

The actual keyframe type created depends on the track type and
the value's data type:
- Bool values -> TimelineBoolKeyframe
- Float/Int values -> TimelineFloatKeyframe
- Color values -> TimelineColorKeyframe
- Arrays -> TimelineFloatArrayKeyframe

Example in fragment data:
```json
{
  "index": 30,
  "easing": "EASE_IN_OUT",
  "value": 100.5
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TimelineTrackData/">TimelineTrackData</a>, <a href="/api-docs/clay-native/ceramic/TimelineKeyframe/">TimelineKeyframe</a>, <a href="/api-docs/clay-native/ceramic/Fragment/">Fragment</a></div>



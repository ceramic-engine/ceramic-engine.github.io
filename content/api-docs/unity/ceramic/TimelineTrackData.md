---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineTrackData
target: Unity
permalink: api-docs/unity/ceramic/TimelineTrackData/
---

# TimelineTrackData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineTrackData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TimelineTrackData</strong> (Typedef)</div>

Data structure representing an animation track in serialized form.

This typedef is used for storing and loading timeline track data,
typically from fragment files. It defines which entity property to
animate and contains all the keyframes for that animation.

At runtime, this data is converted into typed TimelineTrack instances
based on the field type:
- Bool fields -> TimelineBoolTrack
- Float/numeric fields -> TimelineFloatTrack
- Color fields -> TimelineColorTrack
- Array fields -> TimelineFloatArrayTrack

Example in fragment data:
```json
{
  "loop": false,
  "entity": "mySprite",
  "field": "x",
  "keyframes": [
    { "index": 0, "easing": "LINEAR", "value": 0 },
    { "index": 30, "easing": "EASE_OUT", "value": 100 },
    { "index": 60, "easing": "BOUNCE_EASE_OUT", "value": 200 }
  ]
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/TimelineKeyframeData/">TimelineKeyframeData</a>, <a href="/api-docs/unity/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/unity/ceramic/Fragment/">Fragment</a>, <a href="/api-docs/unity/ceramic/FragmentData/">FragmentData</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


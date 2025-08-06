---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Event
target: Clay (Native)
permalink: api-docs/clay-native/spine/Event/
---

# Event

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Event.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Event</strong> (Class)</div>

Stores the current pose values for an {@link Event}.
<p>
See Timeline
{@link Timeline#apply(Skeleton, float, float, com.badlogic.gdx.utils.Array, float, com.esotericsoftware.spine.Animation.MixBlend, com.esotericsoftware.spine.Animation.MixDirection)},
AnimationStateListener {@link AnimationStateListener#event(com.esotericsoftware.spine.AnimationState.TrackEntry, Event)}, and
<a href="http://esotericsoftware.com/spine-events">Events</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="intValue"><div class="plugin-name">spine</div><code><span class="field-name">intValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#intValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="floatValue"><div class="plugin-name">spine</div><code><span class="field-name">floatValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#floatValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="stringValue"><div class="plugin-name">spine</div><code><span class="field-name">stringValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#stringValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="volume"><div class="plugin-name">spine</div><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="balance"><div class="plugin-name">spine</div><code><span class="field-name">balance</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#balance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="time"><div class="plugin-name">spine</div><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getInt"><div class="plugin-name">spine</div><code><span class="field-name">getInt</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setInt"><div class="plugin-name">spine</div><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">intValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intValue` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFloat"><div class="plugin-name">spine</div><code><span class="field-name">getFloat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloat"><div class="plugin-name">spine</div><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">floatValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `floatValue` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getString"><div class="plugin-name">spine</div><code><span class="field-name">getString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setString"><div class="plugin-name">spine</div><code><span class="field-name">setString</span><span class="parenthesis">(</span><span class="arg-name">stringValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stringValue` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getVolume"><div class="plugin-name">spine</div><code><span class="field-name">getVolume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVolume"><div class="plugin-name">spine</div><code><span class="field-name">setVolume</span><span class="parenthesis">(</span><span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `volume` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getBalance"><div class="plugin-name">spine</div><code><span class="field-name">getBalance</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getBalance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setBalance"><div class="plugin-name">spine</div><code><span class="field-name">setBalance</span><span class="parenthesis">(</span><span class="arg-name">balance</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBalance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `balance` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTime"><div class="plugin-name">spine</div><code><span class="field-name">getTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation time this event was keyed.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getData"><div class="plugin-name">spine</div><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/EventData/" class="type-link">EventData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The events's setup pose data.
| Returns |
|---------|
| [EventData](/api-docs/clay-native/spine/EventData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/EventData/" class="type-link">EventData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [Float](/api-docs/clay-native/Float/) |
| `data` | [EventData](/api-docs/clay-native/spine/EventData/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/EventData/" class="type-link">EventData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


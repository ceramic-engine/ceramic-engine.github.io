---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: DrawOrderTimeline
target: Clay (Native)
permalink: api-docs/clay-native/spine/DrawOrderTimeline/
---

# DrawOrderTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/Timeline/">Timeline</a> → <strong>spine.DrawOrderTimeline</strong> (Class)</div>

Changes a skeleton's {@link Skeleton#getDrawOrder()}.

## Instance Members

<div class="signature field-method no-description has-plugin" id="getFrameCount"><div class="plugin-name">spine</div><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDrawOrders"><div class="plugin-name">spine</div><code><span class="field-name">getDrawOrders</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/IntArray2D/" class="type-link">spine.support.utils.IntArray2D</a></code><a class="header-anchor" href="#getDrawOrders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The draw order for each frame. See {@link #setFrame(int, float, int[])}.
| Returns |
|---------|
| [spine.support.utils.IntArray2D](/api-docs/clay-native/spine/support/utils/IntArray2D/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">drawOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/IntArray/" class="type-link">spine.support.utils.IntArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and draw order for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/clay-native/Float/) | The frame time in seconds.  |
| `drawOrder` | [spine.support.utils.IntArray](/api-docs/clay-native/spine/support/utils/IntArray/) | For each slot in { |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/clay-native/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/clay-native/Float/) |
| `time` | [Float](/api-docs/clay-native/Float/) |
| `events` | [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Event](/api-docs/clay-native/spine/Event/)> |
| `alpha` | [Float](/api-docs/clay-native/Float/) |
| `blend` | [MixBlend](/api-docs/clay-native/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/clay-native/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/clay-native/Int/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="propertyIds"><div class="plugin-name">spine</div><code><span class="field-name">propertyIds</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a></code><a class="header-anchor" href="#propertyIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="drawOrders"><div class="plugin-name">spine</div><code><span class="field-name">drawOrders</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/IntArray2D/" class="type-link">spine.support.utils.IntArray2D</a></code><a class="header-anchor" href="#drawOrders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


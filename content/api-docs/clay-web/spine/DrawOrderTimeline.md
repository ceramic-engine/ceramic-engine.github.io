---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: DrawOrderTimeline
target: Clay (Web)
permalink: api-docs/clay-web/spine/DrawOrderTimeline/
---

# DrawOrderTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/spine/Timeline/">Timeline</a> → <strong>spine.DrawOrderTimeline</strong> (Class)</div>

Changes a skeleton's {@link Skeleton#getDrawOrder()}.

## Instance Members

<div class="signature field-method no-description has-plugin" id="getFrameCount"><div class="plugin-name">spine</div><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDrawOrders"><div class="plugin-name">spine</div><code><span class="field-name">getDrawOrders</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/IntArray2D/" class="type-link">spine.support.utils.IntArray2D</a></code><a class="header-anchor" href="#getDrawOrders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The draw order for each frame. See {@link #setFrame(int, float, int[])}.
| Returns |
|---------|
| [spine.support.utils.IntArray2D](/api-docs/clay-web/spine/support/utils/IntArray2D/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">drawOrder</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/IntArray/" class="type-link">spine.support.utils.IntArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and draw order for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-web/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/clay-web/Float/) | The frame time in seconds.  |
| `drawOrder` | [spine.support.utils.IntArray](/api-docs/clay-web/spine/support/utils/IntArray/) | For each slot in { |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/clay-web/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/clay-web/Float/) |
| `time` | [Float](/api-docs/clay-web/Float/) |
| `events` | [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Event](/api-docs/clay-web/spine/Event/)> |
| `alpha` | [Float](/api-docs/clay-web/Float/) |
| `blend` | [MixBlend](/api-docs/clay-web/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/clay-web/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/clay-web/Int/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="propertyIds"><div class="plugin-name">spine</div><code><span class="field-name">propertyIds</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a></code><a class="header-anchor" href="#propertyIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="drawOrders"><div class="plugin-name">spine</div><code><span class="field-name">drawOrders</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/IntArray2D/" class="type-link">spine.support.utils.IntArray2D</a></code><a class="header-anchor" href="#drawOrders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


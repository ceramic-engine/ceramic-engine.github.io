---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineListener
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpineListener/
---

# SpineListener

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/Spine.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineListener</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spine/AnimationStateListener/">spine.AnimationStateListener</a></div>

Internal listener for Spine animation state events.

This class implements the AnimationStateListener interface and forwards
events to dynamic function properties for flexible event handling.

## Instance Members

<div class="signature field-method has-description has-plugin" id="onStart"><div class="plugin-name">spine</div><code><span class="field-name">onStart</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when an animation starts playing on a track.


| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | The track entry that started |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="start"><div class="plugin-name">spine</div><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onInterrupt"><div class="plugin-name">spine</div><code><span class="field-name">onInterrupt</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onInterrupt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when an animation is interrupted by another animation.
The interrupted animation may continue mixing.


| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | The track entry that was interrupted |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="interrupt"><div class="plugin-name">spine</div><code><span class="field-name">interrupt</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#interrupt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onEnd"><div class="plugin-name">spine</div><code><span class="field-name">onEnd</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when an animation ends and will no longer be applied.


| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | The track entry that ended |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="end"><div class="plugin-name">spine</div><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onDispose"><div class="plugin-name">spine</div><code><span class="field-name">onDispose</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onDispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when a track entry is about to be disposed.
Do not keep references to the entry after this call.


| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | The track entry being disposed |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="dispose"><div class="plugin-name">spine</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onComplete"><div class="plugin-name">spine</div><code><span class="field-name">onComplete</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called each time an animation completes a full loop.


| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | The track entry that completed |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="complete"><div class="plugin-name">spine</div><code><span class="field-name">complete</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#complete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onEvent"><div class="plugin-name">spine</div><code><span class="field-name">onEvent</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Event/" class="type-link">spine.Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when an animation triggers a user-defined event.


| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | The track entry that triggered the event  |
| `event` | [spine.Event](/api-docs/clay-web/spine/Event/) | The event data |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="event"><div class="plugin-name">spine</div><code><span class="field-name">event</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Event/" class="type-link">spine.Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#event"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [spine.TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |
| `event` | [spine.Event](/api-docs/clay-web/spine/Event/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


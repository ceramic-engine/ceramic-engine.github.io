---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: AnimationStateListener
target: Unity
permalink: api-docs/unity/spine/AnimationStateListener/
---

# AnimationStateListener

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/AnimationState.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.AnimationStateListener</strong> (Interface) → <a href="/api-docs/unity/ceramic/SpineListener/">ceramic.SpineListener</a>, <a href="/api-docs/unity/spine/AnimationStateAdapter/">AnimationStateAdapter</a></div>

The interface to implement for receiving TrackEntry events. It is always safe to call AnimationState methods when receiving
events.
<p>
See TrackEntry {@link TrackEntry#setListener(AnimationStateListener)} and AnimationState
{@link AnimationState#addListener(AnimationStateListener)}.

## Instance Members

<div class="signature field-method has-description has-plugin" id="start"><div class="plugin-name">spine</div><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/spine/TrackEntry/" class="type-link">TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked when this entry has been set as the current entry. {@link #end(TrackEntry)} will occur when this entry will no
longer be applied.

| Name | Type |
|------|------|
| `entry` | [TrackEntry](/api-docs/unity/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="interrupt"><div class="plugin-name">spine</div><code><span class="field-name">interrupt</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/spine/TrackEntry/" class="type-link">TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#interrupt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked when another entry has replaced this entry as the current entry. This entry may continue being applied for
mixing.

| Name | Type |
|------|------|
| `entry` | [TrackEntry](/api-docs/unity/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="end"><div class="plugin-name">spine</div><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/spine/TrackEntry/" class="type-link">TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked when this entry will never be applied again. This only occurs if this entry has previously been set as the
current entry ({@link #start(TrackEntry)} was invoked).

| Name | Type |
|------|------|
| `entry` | [TrackEntry](/api-docs/unity/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">spine</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/spine/TrackEntry/" class="type-link">TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked when this entry will be disposed. This may occur without the entry ever being set as the current entry.
<p>
References to the entry should not be kept after <code>dispose</code> is called, as it may be destroyed or reused.

| Name | Type |
|------|------|
| `entry` | [TrackEntry](/api-docs/unity/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="complete"><div class="plugin-name">spine</div><code><span class="field-name">complete</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/spine/TrackEntry/" class="type-link">TrackEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#complete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked every time this entry's animation completes a loop. This may occur during mixing (after
{@link #interrupt(TrackEntry)}).
<p>
If this entry's {@link TrackEntry#getMixingTo()} is not null, this entry is mixing out (it is not the current entry).
<p>
Because this event is triggered at the end of {@link AnimationState#apply(Skeleton)}, any animations set in response to
the event won't be applied until the next time the AnimationState is applied.

| Name | Type |
|------|------|
| `entry` | [TrackEntry](/api-docs/unity/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="event"><div class="plugin-name">spine</div><code><span class="field-name">event</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/unity/spine/TrackEntry/" class="type-link">TrackEntry</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Event/" class="type-link">Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#event"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invoked when this entry's animation triggers an event. This may occur during mixing (after
{@link #interrupt(TrackEntry)}), see {@link TrackEntry#eventThreshold}.
<p>
Because this event is triggered at the end of {@link AnimationState#apply(Skeleton)}, any animations set in response to
the event won't be applied until the next time the AnimationState is applied.

| Name | Type |
|------|------|
| `entry` | [TrackEntry](/api-docs/unity/spine/TrackEntry/) |
| `event` | [Event](/api-docs/unity/spine/Event/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


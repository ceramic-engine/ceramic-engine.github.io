---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: TrackEntry
target: Clay (Web)
permalink: api-docs/clay-web/spine/TrackEntry/
---

# TrackEntry

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/AnimationState.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.TrackEntry</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spine/support/utils/Poolable/">spine.support.utils.Poolable</a></div>

Stores settings and other state for the playback of an animation on an {@link AnimationState} track.
<p>
References to a track entry must not be kept after the {@link AnimationStateListener#dispose(TrackEntry)} event occurs.

## Instance Members

<div class="signature field-var no-description has-plugin" id="animation"><div class="plugin-name">spine</div><code><span class="field-name">animation</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Animation/" class="type-link">Animation</a></code><a class="header-anchor" href="#animation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="previous"><div class="plugin-name">spine</div><code><span class="field-name">previous</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#previous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="next"><div class="plugin-name">spine</div><code><span class="field-name">next</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixingFrom"><div class="plugin-name">spine</div><code><span class="field-name">mixingFrom</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#mixingFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixingTo"><div class="plugin-name">spine</div><code><span class="field-name">mixingTo</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#mixingTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="listener"><div class="plugin-name">spine</div><code><span class="field-name">listener</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/AnimationStateListener/" class="type-link">AnimationStateListener</a></code><a class="header-anchor" href="#listener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="trackIndex"><div class="plugin-name">spine</div><code><span class="field-name">trackIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#trackIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="loop"><div class="plugin-name">spine</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="holdPrevious"><div class="plugin-name">spine</div><code><span class="field-name">holdPrevious</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#holdPrevious"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="reverse"><div class="plugin-name">spine</div><code><span class="field-name">reverse</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="eventThreshold"><div class="plugin-name">spine</div><code><span class="field-name">eventThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#eventThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachmentThreshold"><div class="plugin-name">spine</div><code><span class="field-name">attachmentThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#attachmentThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="drawOrderThreshold"><div class="plugin-name">spine</div><code><span class="field-name">drawOrderThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#drawOrderThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="animationStart"><div class="plugin-name">spine</div><code><span class="field-name">animationStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#animationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="animationEnd"><div class="plugin-name">spine</div><code><span class="field-name">animationEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#animationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="animationLast"><div class="plugin-name">spine</div><code><span class="field-name">animationLast</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#animationLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextAnimationLast"><div class="plugin-name">spine</div><code><span class="field-name">nextAnimationLast</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nextAnimationLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="delay"><div class="plugin-name">spine</div><code><span class="field-name">delay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#delay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="trackTime"><div class="plugin-name">spine</div><code><span class="field-name">trackTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#trackTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="trackLast"><div class="plugin-name">spine</div><code><span class="field-name">trackLast</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#trackLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextTrackLast"><div class="plugin-name">spine</div><code><span class="field-name">nextTrackLast</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nextTrackLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="trackEnd"><div class="plugin-name">spine</div><code><span class="field-name">trackEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#trackEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timeScale"><div class="plugin-name">spine</div><code><span class="field-name">timeScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timeScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="alpha"><div class="plugin-name">spine</div><code><span class="field-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixTime"><div class="plugin-name">spine</div><code><span class="field-name">mixTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixDuration"><div class="plugin-name">spine</div><code><span class="field-name">mixDuration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="interruptAlpha"><div class="plugin-name">spine</div><code><span class="field-name">interruptAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#interruptAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="totalAlpha"><div class="plugin-name">spine</div><code><span class="field-name">totalAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#totalAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixBlend"><div class="plugin-name">spine</div><code><span class="field-name">mixBlend</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixBlend/" class="type-link">MixBlend</a></code><a class="header-anchor" href="#mixBlend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timelineMode"><div class="plugin-name">spine</div><code><span class="field-name">timelineMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/IntArray/" class="type-link">spine.support.utils.IntArray</a></code><a class="header-anchor" href="#timelineMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timelineHoldMix"><div class="plugin-name">spine</div><code><span class="field-name">timelineHoldMix</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="#" class="type-link">TrackEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#timelineHoldMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timelinesRotation"><div class="plugin-name">spine</div><code><span class="field-name">timelinesRotation</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#timelinesRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="reset"><div class="plugin-name">spine</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTrackIndex"><div class="plugin-name">spine</div><code><span class="field-name">getTrackIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTrackIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the track where this track entry is either current or queued.
<p>
See {@link AnimationState#getCurrent(int)}.
| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAnimation"><div class="plugin-name">spine</div><code><span class="field-name">getAnimation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Animation/" class="type-link">Animation</a></code><a class="header-anchor" href="#getAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation to apply for this track entry.
| Returns |
|---------|
| [Animation](/api-docs/clay-web/spine/Animation/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAnimation"><div class="plugin-name">spine</div><code><span class="field-name">setAnimation</span><span class="parenthesis">(</span><span class="arg-name">animation</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Animation/" class="type-link">Animation</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `animation` | [Animation](/api-docs/clay-web/spine/Animation/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getLoop"><div class="plugin-name">spine</div><code><span class="field-name">getLoop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
duration.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setLoop"><div class="plugin-name">spine</div><code><span class="field-name">setLoop</span><span class="parenthesis">(</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `loop` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDelay"><div class="plugin-name">spine</div><code><span class="field-name">getDelay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seconds to postpone playing the animation. When this track entry is the current track entry, <code>delay</code>
postpones incrementing the {@link #getTrackTime()}. When this track entry is queued, <code>delay</code> is the time from
the start of the previous animation to when this track entry will become the current track entry (ie when the previous
track entry {@link TrackEntry#getTrackTime()} >= this track entry's <code>delay</code>).
<p>
{@link #getTimeScale()} affects the delay.
<p>
When using {@link AnimationState#addAnimation(int, Animation, boolean, float)} with a <code>delay</code> <= 0, the delay
is set using the mix duration from the {@link AnimationStateData}. If {@link #mixDuration} is set afterward, the delay
may need to be adjusted.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDelay"><div class="plugin-name">spine</div><code><span class="field-name">setDelay</span><span class="parenthesis">(</span><span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delay` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTrackTime"><div class="plugin-name">spine</div><code><span class="field-name">getTrackTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTrackTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current time in seconds this track entry has been the current track entry. The track time determines
{@link #getAnimationTime()}. The track time can be set to start the animation at a time other than 0, without affecting
looping.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTrackTime"><div class="plugin-name">spine</div><code><span class="field-name">setTrackTime</span><span class="parenthesis">(</span><span class="arg-name">trackTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTrackTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `trackTime` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTrackEnd"><div class="plugin-name">spine</div><code><span class="field-name">getTrackEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTrackEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The track time in seconds when this animation will be removed from the track. Defaults to the highest possible float
value, meaning the animation will be applied until a new animation is set or the track is cleared. If the track end time
is reached, no other animations are queued for playback, and mixing from any previous animations is complete, then the
properties keyed by the animation are set to the setup pose and the track is cleared.
<p>
It may be desired to use {@link AnimationState#addEmptyAnimation(int, float, float)} rather than have the animation
abruptly cease being applied.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTrackEnd"><div class="plugin-name">spine</div><code><span class="field-name">setTrackEnd</span><span class="parenthesis">(</span><span class="arg-name">trackEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTrackEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `trackEnd` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTrackComplete"><div class="plugin-name">spine</div><code><span class="field-name">getTrackComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTrackComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this track entry is non-looping, the track time in seconds when {@link #getAnimationEnd()} is reached, or the current
{@link #getTrackTime()} if it has already been reached. If this track entry is looping, the track time when this
animation will reach its next {@link #getAnimationEnd()} (the next loop completion).
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAnimationStart"><div class="plugin-name">spine</div><code><span class="field-name">getAnimationStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAnimationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seconds when this animation starts, both initially and after looping. Defaults to 0.
<p>
When changing the <code>animationStart</code> time, it often makes sense to set {@link #getAnimationLast()} to the same
value to prevent timeline keys before the start time from triggering.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAnimationStart"><div class="plugin-name">spine</div><code><span class="field-name">setAnimationStart</span><span class="parenthesis">(</span><span class="arg-name">animationStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAnimationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `animationStart` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAnimationEnd"><div class="plugin-name">spine</div><code><span class="field-name">getAnimationEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAnimationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seconds for the last frame of this animation. Non-looping animations won't play past this time. Looping animations will
loop back to {@link #getAnimationStart()} at this time. Defaults to the animation {@link Animation#duration}.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAnimationEnd"><div class="plugin-name">spine</div><code><span class="field-name">setAnimationEnd</span><span class="parenthesis">(</span><span class="arg-name">animationEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAnimationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `animationEnd` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAnimationLast"><div class="plugin-name">spine</div><code><span class="field-name">getAnimationLast</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAnimationLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The time in seconds this animation was last applied. Some timelines use this for one-time triggers. Eg, when this
animation is applied, event timelines will fire all events between the <code>animationLast</code> time (exclusive) and
<code>animationTime</code> (inclusive). Defaults to -1 to ensure triggers on frame 0 happen the first time this animation
is applied.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAnimationLast"><div class="plugin-name">spine</div><code><span class="field-name">setAnimationLast</span><span class="parenthesis">(</span><span class="arg-name">animationLast</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAnimationLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `animationLast` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAnimationTime"><div class="plugin-name">spine</div><code><span class="field-name">getAnimationTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAnimationTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uses {@link #getTrackTime()} to compute the <code>animationTime</code>, which is between {@link #getAnimationStart()}
and {@link #getAnimationEnd()}. When the <code>trackTime</code> is 0, the <code>animationTime</code> is equal to the
<code>animationStart</code> time.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTimeScale"><div class="plugin-name">spine</div><code><span class="field-name">getTimeScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTimeScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiplier for the delta time when this track entry is updated, causing time for this animation to pass slower or
faster. Defaults to 1.
<p>
Values < 0 are not supported. To play an animation in reverse, use {@link #getReverse()}.
<p>
{@link #getMixTime()} is not affected by track entry time scale, so {@link #getMixDuration()} may need to be adjusted to
match the animation speed.
<p>
When using {@link AnimationState#addAnimation(int, Animation, boolean, float)} with a <code>delay</code> <= 0, the
{@link #getDelay()} is set using the mix duration from the {@link AnimationStateData}, assuming time scale to be 1. If
the time scale is not 1, the delay may need to be adjusted.
<p>
See AnimationState {@link AnimationState#getTimeScale()} for affecting all animations.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTimeScale"><div class="plugin-name">spine</div><code><span class="field-name">setTimeScale</span><span class="parenthesis">(</span><span class="arg-name">timeScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTimeScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `timeScale` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getListener"><div class="plugin-name">spine</div><code><span class="field-name">getListener</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/AnimationStateListener/" class="type-link">AnimationStateListener</a></code><a class="header-anchor" href="#getListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The listener for events generated by this track entry, or null.
<p>
A track entry returned from {@link AnimationState#setAnimation(int, Animation, boolean)} is already the current animation
for the track, so the track entry listener {@link AnimationStateListener#start(TrackEntry)} will not be called.
| Returns |
|---------|
| [AnimationStateListener](/api-docs/clay-web/spine/AnimationStateListener/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setListener"><div class="plugin-name">spine</div><code><span class="field-name">setListener</span><span class="parenthesis">(</span><span class="arg-name">listener</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/AnimationStateListener/" class="type-link">AnimationStateListener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `listener` | [AnimationStateListener](/api-docs/clay-web/spine/AnimationStateListener/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAlpha"><div class="plugin-name">spine</div><code><span class="field-name">getAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Values < 1 mix this animation with the skeleton's current pose (usually the pose resulting from lower tracks). Defaults
to 1, which overwrites the skeleton's current pose with this animation.
<p>
Typically track 0 is used to completely pose the skeleton, then alpha is used on higher tracks. It doesn't make sense to
use alpha on track 0 if the skeleton pose is from the last frame render.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAlpha"><div class="plugin-name">spine</div><code><span class="field-name">setAlpha</span><span class="parenthesis">(</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `alpha` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEventThreshold"><div class="plugin-name">spine</div><code><span class="field-name">getEventThreshold</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getEventThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
<code>eventThreshold</code>, event timelines are applied while this animation is being mixed out. Defaults to 0, so event
timelines are not applied while this animation is being mixed out.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEventThreshold"><div class="plugin-name">spine</div><code><span class="field-name">setEventThreshold</span><span class="parenthesis">(</span><span class="arg-name">eventThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEventThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventThreshold` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachmentThreshold"><div class="plugin-name">spine</div><code><span class="field-name">getAttachmentThreshold</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAttachmentThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
<code>attachmentThreshold</code>, attachment timelines are applied while this animation is being mixed out. Defaults to
0, so attachment timelines are not applied while this animation is being mixed out.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAttachmentThreshold"><div class="plugin-name">spine</div><code><span class="field-name">setAttachmentThreshold</span><span class="parenthesis">(</span><span class="arg-name">attachmentThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachmentThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attachmentThreshold` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDrawOrderThreshold"><div class="plugin-name">spine</div><code><span class="field-name">getDrawOrderThreshold</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDrawOrderThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
<code>drawOrderThreshold</code>, draw order timelines are applied while this animation is being mixed out. Defaults to 0,
so draw order timelines are not applied while this animation is being mixed out.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDrawOrderThreshold"><div class="plugin-name">spine</div><code><span class="field-name">setDrawOrderThreshold</span><span class="parenthesis">(</span><span class="arg-name">drawOrderThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDrawOrderThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `drawOrderThreshold` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getNext"><div class="plugin-name">spine</div><code><span class="field-name">getNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#getNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation queued to start after this animation, or null if there is none. <code>next</code> makes up a doubly linked
list.
<p>
See {@link AnimationState#clearNext(TrackEntry)} to truncate the list.
| Returns |
|---------|
| [TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPrevious"><div class="plugin-name">spine</div><code><span class="field-name">getPrevious</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#getPrevious"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation queued to play before this animation, or null. <code>previous</code> makes up a doubly linked list.
| Returns |
|---------|
| [TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isComplete"><div class="plugin-name">spine</div><code><span class="field-name">isComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if at least one loop has been completed.
<p>
See {@link AnimationStateListener#complete(TrackEntry)}.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixTime"><div class="plugin-name">spine</div><code><span class="field-name">getMixTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seconds from 0 to the {@link #getMixDuration()} when mixing from the previous animation to this animation. May be
slightly more than <code>mixDuration</code> when the mix is complete.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixTime"><div class="plugin-name">spine</div><code><span class="field-name">setMixTime</span><span class="parenthesis">(</span><span class="arg-name">mixTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixTime` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixDuration"><div class="plugin-name">spine</div><code><span class="field-name">getMixDuration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seconds for mixing from the previous animation to this animation. Defaults to the value provided by AnimationStateData
{@link AnimationStateData#getMix(Animation, Animation)} based on the animation before this animation (if any).
<p>
A mix duration of 0 still mixes out over one frame to provide the track entry being mixed out a chance to revert the
properties it was animating.
<p>
The <code>mixDuration</code> can be set manually rather than use the value from
{@link AnimationStateData#getMix(Animation, Animation)}. In that case, the <code>mixDuration</code> can be set for a new
track entry only before {@link AnimationState#update(float)} is first called.
<p>
When using {@link AnimationState#addAnimation(int, Animation, boolean, float)} with a <code>delay</code> <= 0, the
{@link #getDelay()} is set using the mix duration from the {@link AnimationStateData}. If <code>mixDuration</code> is set
afterward, the delay may need to be adjusted. For example:
<code>entry.delay = entry.previous.getTrackComplete() - entry.mixDuration;</code>
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixDuration"><div class="plugin-name">spine</div><code><span class="field-name">setMixDuration</span><span class="parenthesis">(</span><span class="arg-name">mixDuration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixDuration` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixBlend"><div class="plugin-name">spine</div><code><span class="field-name">getMixBlend</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixBlend/" class="type-link">MixBlend</a></code><a class="header-anchor" href="#getMixBlend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls how properties keyed in the animation are mixed with lower tracks. Defaults to {@link MixBlend#replace}.
<p>
Track entries on track 0 ignore this setting and always use {@link MixBlend#first}.
<p>
The <code>mixBlend</code> can be set for a new track entry only before {@link AnimationState#apply(Skeleton)} is first
called.
| Returns |
|---------|
| [MixBlend](/api-docs/clay-web/spine/MixBlend/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixBlend"><div class="plugin-name">spine</div><code><span class="field-name">setMixBlend</span><span class="parenthesis">(</span><span class="arg-name">mixBlend</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixBlend/" class="type-link">MixBlend</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixBlend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixBlend` | [MixBlend](/api-docs/clay-web/spine/MixBlend/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixingFrom"><div class="plugin-name">spine</div><code><span class="field-name">getMixingFrom</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#getMixingFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The track entry for the previous animation when mixing from the previous animation to this animation, or null if no
mixing is currently occuring. When mixing from multiple animations, <code>mixingFrom</code> makes up a linked list.
| Returns |
|---------|
| [TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixingTo"><div class="plugin-name">spine</div><code><span class="field-name">getMixingTo</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TrackEntry</a></code><a class="header-anchor" href="#getMixingTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The track entry for the next animation when mixing from this animation to the next animation, or null if no mixing is
currently occuring. When mixing to multiple animations, <code>mixingTo</code> makes up a linked list.
| Returns |
|---------|
| [TrackEntry](/api-docs/clay-web/spine/TrackEntry/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setHoldPrevious"><div class="plugin-name">spine</div><code><span class="field-name">setHoldPrevious</span><span class="parenthesis">(</span><span class="arg-name">holdPrevious</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHoldPrevious"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `holdPrevious` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHoldPrevious"><div class="plugin-name">spine</div><code><span class="field-name">getHoldPrevious</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getHoldPrevious"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, when mixing from the previous animation to this animation, the previous animation is applied as normal instead
of being mixed out.
<p>
When mixing between animations that key the same property, if a lower track also keys that property then the value will
briefly dip toward the lower track value during the mix. This happens because the first animation mixes from 100% to 0%
while the second animation mixes from 0% to 100%. Setting <code>holdPrevious</code> to true applies the first animation
at 100% during the mix so the lower track value is overwritten. Such dipping does not occur on the lowest track which
keys the property, only when a higher track also keys the property.
<p>
Snapping will occur if <code>holdPrevious</code> is true and this animation does not key all the same properties as the
previous animation.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resetRotationDirections"><div class="plugin-name">spine</div><code><span class="field-name">resetRotationDirections</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetRotationDirections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the rotation directions for mixing this entry's rotate timelines. This can be useful to avoid bones rotating the
long way around when using {@link #alpha} and starting animations on other tracks.
<p>
Mixing with {@link MixBlend#replace} involves finding a rotation between two others, which has two possible solutions:
the short way or the long way around. The two rotations likely change over time, so which direction is the short or long
way also changes. If the short way was always chosen, bones would flip to the other side when that direction became the
long way. TrackEntry chooses the short way the first time it is applied and remembers that direction.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setReverse"><div class="plugin-name">spine</div><code><span class="field-name">setReverse</span><span class="parenthesis">(</span><span class="arg-name">reverse</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setReverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `reverse` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getReverse"><div class="plugin-name">spine</div><code><span class="field-name">getReverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getReverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, the animation will be applied in reverse. Events are not fired when an animation is applied in reverse.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isEmptyAnimation"><div class="plugin-name">spine</div><code><span class="field-name">isEmptyAnimation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmptyAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if this entry is for the empty animation. See {@link AnimationState#setEmptyAnimation(int, float)},
{@link AnimationState#addEmptyAnimation(int, float, float)}, and {@link AnimationState#setEmptyAnimations(float)}.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


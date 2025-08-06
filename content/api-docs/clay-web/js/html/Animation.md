---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Animation
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Animation/
---

# Animation

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.Animation</strong> (extern class)</div>

The `Animation` interface of the Web Animations API represents a single animation player and provides playback controls and a timeline for an animation node or source.

Documentation [Animation](https://developer.mozilla.org/en-US/docs/Web/API/Animation) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Animation$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Animation></div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the `String` used to identify the animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="effect"><code><span class="field-name">effect</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AnimationEffect/" class="type-link">AnimationEffect</a></code><a class="header-anchor" href="#effect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the `AnimationEffectReadOnly` associated with this animation. This will usually be a `KeyframeEffect` object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeline"><code><span class="field-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AnimationTimeline/" class="type-link">AnimationTimeline</a></code><a class="header-anchor" href="#timeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets or sets the `AnimationTimeline` associated with this animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startTime"><code><span class="field-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#startTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets or sets the scheduled time when an animation's playback should begin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentTime"><code><span class="field-name">currentTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current time value of the animation in milliseconds, whether running or paused. If the animation lacks a `AnimationTimeline`, is inactive or hasn't been played yet, its value is `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="playbackRate"><code><span class="field-name">playbackRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#playbackRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets or sets the playback rate of the animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="playState"><code><span class="field-name">playState</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AnimationPlayState/" class="type-link">AnimationPlayState</a></code><a class="header-anchor" href="#playState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an enumerated value describing the playback state of an animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pending"><code><span class="field-name">pending</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ready"><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="#" class="type-link">Animation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current ready Promise for this animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="finished"><code><span class="field-name">finished</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="#" class="type-link">Animation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#finished"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current finished Promise for this animation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onfinish"><code><span class="field-name">onfinish</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onfinish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the event handler for the `finish` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oncancel"><code><span class="field-name">oncancel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the event handler for the `cancel` event.

<hr class="field-separator" />

<div class="signature field-method has-description" id="cancel"><code><span class="field-name">cancel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears all `KeyframeEffect` caused by this animation and aborts its playback.

<hr class="field-separator" />

<div class="signature field-method has-description" id="finish"><code><span class="field-name">finish</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seeks either end of an animation, depending on whether the animation is playing or reversing.

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts or resumes playing of an animation, or begins the animation again if it previously finished.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Suspends playing of an animation.

<hr class="field-separator" />

<div class="signature field-method has-description" id="updatePlaybackRate"><code><span class="field-name">updatePlaybackRate</span><span class="parenthesis">(</span><span class="arg-name">playbackRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePlaybackRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the speed of an animation after first synchronizing its playback position.

| Name | Type |
|------|------|
| `playbackRate` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reverse"><code><span class="field-name">reverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reverses playback direction, stopping at the start of the animation. If the animation is finished or unplayed, it will play from end to beginning.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">effect</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AnimationEffect/" class="type-link">AnimationEffect</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AnimationTimeline/" class="type-link">AnimationTimeline</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `effect` | [AnimationEffect](/api-docs/clay-web/js/html/AnimationEffect/) | *(optional)* |
| `timeline` | [AnimationTimeline](/api-docs/clay-web/js/html/AnimationTimeline/) | *(optional)* |


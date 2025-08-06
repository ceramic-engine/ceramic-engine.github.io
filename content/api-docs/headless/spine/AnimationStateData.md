---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: AnimationStateData
target: Headless
permalink: api-docs/headless/spine/AnimationStateData/
---

# AnimationStateData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/AnimationStateData.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.AnimationStateData</strong> (Class)</div>

Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed.

## Instance Members

<div class="signature field-var no-description has-plugin" id="skeletonData"><div class="plugin-name">spine</div><code><span class="field-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">SkeletonData</a></code><a class="header-anchor" href="#skeletonData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="animationToMixTime"><div class="plugin-name">spine</div><code><span class="field-name">animationToMixTime</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/AnimationStateMap/" class="type-link">spine.support.utils.AnimationStateMap</a></code><a class="header-anchor" href="#animationToMixTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tempAnimationStateDataKey"><div class="plugin-name">spine</div><code><span class="field-name">tempAnimationStateDataKey</span><span class="operator">:</span> <a href="/api-docs/headless/spine/AnimationStateDataKey/" class="type-link">AnimationStateDataKey</a></code><a class="header-anchor" href="#tempAnimationStateDataKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="defaultMix"><div class="plugin-name">spine</div><code><span class="field-name">defaultMix</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#defaultMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSkeletonData"><div class="plugin-name">spine</div><code><span class="field-name">getSkeletonData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">SkeletonData</a></code><a class="header-anchor" href="#getSkeletonData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The SkeletonData to look up animations when they are specified by name.
| Returns |
|---------|
| [SkeletonData](/api-docs/headless/spine/SkeletonData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setMixByName"><div class="plugin-name">spine</div><code><span class="field-name">setMixByName</span><span class="parenthesis">(</span><span class="arg-name">fromName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">toName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a mix duration by animation name.
<p>
See {@link #setMix(Animation, Animation, float)}.

| Name | Type |
|------|------|
| `fromName` | [String](/api-docs/headless/String/) |
| `toName` | [String](/api-docs/headless/String/) |
| `duration` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setMix"><div class="plugin-name">spine</div><code><span class="field-name">setMix</span><span class="parenthesis">(</span><span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Animation/" class="type-link">Animation</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Animation/" class="type-link">Animation</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the mix duration when changing from the specified animation to the other.
<p>
See {@link TrackEntry#mixDuration}.

| Name | Type |
|------|------|
| `from` | [Animation](/api-docs/headless/spine/Animation/) |
| `to` | [Animation](/api-docs/headless/spine/Animation/) |
| `duration` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMix"><div class="plugin-name">spine</div><code><span class="field-name">getMix</span><span class="parenthesis">(</span><span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Animation/" class="type-link">Animation</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Animation/" class="type-link">Animation</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the mix duration to use when changing from the specified animation to the other, or the {@link #getDefaultMix()} if
no mix duration has been set.

| Name | Type |
|------|------|
| `from` | [Animation](/api-docs/headless/spine/Animation/) |
| `to` | [Animation](/api-docs/headless/spine/Animation/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDefaultMix"><div class="plugin-name">spine</div><code><span class="field-name">getDefaultMix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDefaultMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mix duration to use when no mix duration has been defined between two animations.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDefaultMix"><div class="plugin-name">spine</div><code><span class="field-name">setDefaultMix</span><span class="parenthesis">(</span><span class="arg-name">defaultMix</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDefaultMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `defaultMix` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">SkeletonData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeletonData` | [SkeletonData](/api-docs/headless/spine/SkeletonData/) |


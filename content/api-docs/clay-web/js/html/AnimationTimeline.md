---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AnimationTimeline
target: Clay (Web)
permalink: api-docs/clay-web/js/html/AnimationTimeline/
---

# AnimationTimeline

<div class="type-hierarchy"><strong>js.html.AnimationTimeline</strong> (extern class) → <a href="/api-docs/clay-web/js/html/DocumentTimeline/">DocumentTimeline</a></div>

The `AnimationTimeline` interface of the Web Animations API represents the timeline of an animation. This interface exists to define timeline features (inherited by `DocumentTimeline` and future timeline types) and is not itself directly used by developers. Anywhere you see `AnimationTimeline`, you should use `DocumentTimeline` or any other timeline type instead.

Documentation [AnimationTimeline](https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline></div>


## Instance Members

<div class="signature field-var has-description" id="currentTime"><code><span class="field-name">currentTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the time value in milliseconds for this timeline or `null` if this timeline is inactive.


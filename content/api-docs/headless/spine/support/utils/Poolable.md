---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Poolable
target: Headless
permalink: api-docs/headless/spine/support/utils/Poolable/
---

# Poolable

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/support/utils/Pool.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.support.utils.Poolable</strong> (Interface) → <a href="/api-docs/headless/spine/TrackEntry/">spine.TrackEntry</a></div>

Objects implementing this interface will have {@link #reset()} called when passed to {@link Pool#free(Object)}.

## Instance Members

<div class="signature field-method has-description has-plugin" id="reset"><div class="plugin-name">spine</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the object for reuse. Object references should be nulled and fields may be set to default values.


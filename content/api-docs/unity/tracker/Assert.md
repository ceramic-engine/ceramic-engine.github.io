---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: Assert
target: Unity
permalink: api-docs/unity/tracker/Assert/
---

# Assert

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/Assert.hx">View source</a></div>

<div class="type-hierarchy"><strong>tracker.Assert</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="assert"><code><span class="field-name">assert</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assert the expression evaluates to `true`.
This check is only done in `debug` builds and doesn't affect `release` builds.

| Name | Type | Default |
|------|------|---------|
| `expr` | [Dynamic](/api-docs/unity/Dynamic/) | |
| `reason` | [String](/api-docs/unity/String/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


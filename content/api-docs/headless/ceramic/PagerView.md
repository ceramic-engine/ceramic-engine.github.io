---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: PagerView
target: Headless
permalink: api-docs/headless/ceramic/PagerView/
---

# PagerView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/PagerView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">Quad</a> → <a href="/api-docs/headless/ceramic/Layer/">Layer</a> → <a href="/api-docs/headless/ceramic/View/">View</a> → <a href="/api-docs/headless/ceramic/ScrollView/">ScrollView</a> → <strong>ceramic.PagerView</strong> (Class)</div>

A scroll view that layouts its items as pages, where
each page is exactly the size of the pager view bounds.

This implementation is designed to support a very large number
of items without consuming too much CPU, so it's a preferred option
over `CollectionView` if you just need a way to browse through
children with all the same size as the pager bounds.

It also supports looping (when paging is enabled)

Key features:
- Efficient view recycling for large datasets
- Page-based scrolling with configurable spacing
- Optional looping for infinite scrolling
- Preloading of adjacent pages
- Configurable visibility bounds

```haxe
var pager = new PagerView();
pager.size(400, 300);
pager.loop = true;
pager.preloadAmplitude = 2; // Preload 2 pages before/after
pager.dataSource = myDataSource;
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="dataSource"><div class="plugin-name">ui</div><code><span class="field-name">dataSource</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/PagerViewDataSource/" class="type-link">PagerViewDataSource</a></code><a class="header-anchor" href="#dataSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The data source that provides page views and manages their lifecycle.
Setting this will trigger a reload of all pages.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoDestroyItems"><div class="plugin-name">ui</div><code><span class="field-name">autoDestroyItems</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoDestroyItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically destroy page views when they are no longer needed.
If false, views are kept alive but deactivated when recycled.
Default: true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxReusableViewsCount"><div class="plugin-name">ui</div><code><span class="field-name">maxReusableViewsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxReusableViewsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of reusable views to keep in the pool.
Higher values reduce view creation overhead but consume more memory.
Default: 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visibleOutset"><div class="plugin-name">ui</div><code><span class="field-name">visibleOutset</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#visibleOutset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra padding beyond the visible bounds to keep pages active.
Useful for preloading content just outside the viewport.
Default: 0.0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="preloadAmplitude"><div class="plugin-name">ui</div><code><span class="field-name">preloadAmplitude</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#preloadAmplitude"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of pages to preload before and after, in advance.
- 0: no preload at all (but usually not recommended as you'll see it)
- 1: default value, with sibling pages automatically preloaded
- higher values will preload more pages before and after, usually not needed

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hidePagesOutsideBounds"><div class="plugin-name">ui</div><code><span class="field-name">hidePagesOutsideBounds</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hidePagesOutsideBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to deactivate pages that are outside the visible bounds (plus outset).
When true, invisible pages have their active property set to false.
Default: true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loop"><div class="plugin-name">ui</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loop to the beginning when reaching the end.
(ignored if paging is disabled)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="childrenDepth"><div class="plugin-name">ui</div><code><span class="field-name">childrenDepth</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ChildrenDepth/" class="type-link">ChildrenDepth</a></code><a class="header-anchor" href="#childrenDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Control how children depth is sorted:
- SAME: All pages have the same depth
- INCREMENT: Later pages have higher depth
- DECREMENT: Earlier pages have higher depth
Default: SAME

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemsBehavior"><div class="plugin-name">ui</div><code><span class="field-name">itemsBehavior</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionViewItemsBehavior/" class="type-link">CollectionViewItemsBehavior</a></code><a class="header-anchor" href="#itemsBehavior"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines how page views are managed:
- RECYCLE: Views are recycled when scrolled out of view
- FREEZE: Views remain active but frozen when out of view
- LAZY: Views are created on demand and kept
Default: RECYCLE

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">ui</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reloadData"><div class="plugin-name">ui</div><code><span class="field-name">reloadData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reloadData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reload all data from the data source.
This will query the data source for the current page count
and trigger a layout update.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="closestPageIndex"><div class="plugin-name">ui</div><code><span class="field-name">closestPageIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#closestPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the index of the page closest to the current scroll position.
This takes into account the page size, spacing, and looping behavior.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The index of the closest page (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeLoadedPages"><div class="plugin-name">ui</div><code><span class="field-name">computeLoadedPages</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeLoadedPages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute which pages should be loaded based on current scroll position.
This method handles:
- Loading pages within the preload amplitude
- Recycling pages that are too far away
- Managing the reusable view pool
- Applying looping logic if enabled

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTargetScrollXForPageIndex"><div class="plugin-name">ui</div><code><span class="field-name">getTargetScrollXForPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowOverscroll</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTargetScrollXForPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculate the target horizontal scroll position for a specific page.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pageIndex` | [Int](/api-docs/headless/Int/) | | The index of the target page  |
| `allowOverscroll` | [Bool](/api-docs/headless/Bool/) | `false` | Whether to allow scrolling beyond boundaries  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The X scroll position that would center the page |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTargetScrollYForPageIndex"><div class="plugin-name">ui</div><code><span class="field-name">getTargetScrollYForPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowOverscroll</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTargetScrollYForPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculate the target vertical scroll position for a specific page.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pageIndex` | [Int](/api-docs/headless/Int/) | | The index of the target page  |
| `allowOverscroll` | [Bool](/api-docs/headless/Bool/) | `false` | Whether to allow scrolling beyond boundaries  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The Y scroll position that would center the page |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scrollToPageIndex"><div class="plugin-name">ui</div><code><span class="field-name">scrollToPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollToPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Immediately scroll to the specified page without animation.


| Name | Type | Description |
|------|------|-------------|
| `pageIndex` | [Int](/api-docs/headless/Int/) | The index of the page to scroll to |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="smoothScrollToPageIndex"><div class="plugin-name">ui</div><code><span class="field-name">smoothScrollToPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.15</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#smoothScrollToPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Smoothly scroll to the specified page with animation.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pageIndex` | [Int](/api-docs/headless/Int/) | | The index of the page to scroll to  |
| `duration` | [Float](/api-docs/headless/Float/) | `0.15` | Animation duration in seconds (default: 0.15)  |
| `easing` | Anonymous | *(optional)* | Optional easing function for the animation |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="reusableViews"><div class="plugin-name">ui</div><code><span class="field-name">reusableViews</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/View/" class="type-link">View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#reusableViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool of views available for recycling

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="prevLayoutWidth"><div class="plugin-name">ui</div><code><span class="field-name">prevLayoutWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevLayoutWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="prevLayoutHeight"><div class="plugin-name">ui</div><code><span class="field-name">prevLayoutHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevLayoutHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pageViews"><div class="plugin-name">ui</div><code><span class="field-name">pageViews</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/View/" class="type-link">View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pageViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of currently loaded page views by index

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="numPages"><div class="plugin-name">ui</div><code><span class="field-name">numPages</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numPages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total number of pages from the data source

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePageView"><div class="plugin-name">ui</div><code><span class="field-name">handlePageView</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pageView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePageView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configure and position a page view at the given index.
Handles positioning, depth sorting, visibility, and looping adjustments.

| Name | Type |
|------|------|
| `pageIndex` | [Int](/api-docs/headless/Int/) |
| `pageView` | [View](/api-docs/headless/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkScrollerPosition"><div class="plugin-name">ui</div><code><span class="field-name">checkScrollerPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkScrollerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check and adjust the scroller position for looping behavior.
When looping is enabled, this ensures the scroll position
wraps around seamlessly at the boundaries.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


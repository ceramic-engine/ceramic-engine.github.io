---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: PagerViewDataSource
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/PagerViewDataSource/
---

# PagerViewDataSource

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/PagerViewDataSource.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.PagerViewDataSource</strong> (Interface)</div>

Data source interface for PagerView that provides page content
and manages view lifecycle.

Implementations of this interface control:
- The total number of pages
- Creation and configuration of page views
- Recycling behavior for efficient memory usage

```haxe
class MyPagerDataSource implements PagerViewDataSource {
    var pages:Array<PageData>;
    public function pagerViewSize(pagerView:PagerView):Int {
        return pages.length;
    }
    public function pagerViewPageAtIndex(pagerView:PagerView, pageIndex:Int, reusableView:View):View {
        var view = (reusableView != null) ? reusableView : new MyPageView();
        view.configure(pages[pageIndex]);
        return view;
    }
    public function pagerViewReleasePageAtIndex(pagerView:PagerView, pageIndex:Int, view:View):Bool {
        // Clean up and return true to allow reuse
        view.reset();
        return true;
    }
}
```

## Instance Members

<div class="signature field-method has-description has-plugin" id="pagerViewSize"><div class="plugin-name">ui</div><code><span class="field-name">pagerViewSize</span><span class="parenthesis">(</span><span class="arg-name">pagerView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PagerView/" class="type-link">PagerView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pagerViewSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the number of elements.


| Name | Type | Description |
|------|------|-------------|
| `pagerView` | [PagerView](/api-docs/clay-web/ceramic/PagerView/) | The PagerView requesting the size  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Total number of pages to display |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pagerViewReleasePageAtIndex"><div class="plugin-name">ui</div><code><span class="field-name">pagerViewReleasePageAtIndex</span><span class="parenthesis">(</span><span class="arg-name">pagerView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PagerView/" class="type-link">PagerView</a><span class="operator">,</span> <span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pagerViewReleasePageAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when a view is not used anymore at the given index. Lets the dataSource
do some cleanup if needed, before this view gets reused (if it can).
Returns `true` if the view can be reused at another index of `false` otherwise.

This method is called when:
- The page scrolls out of the visible range
- The PagerView is destroyed
- Data is reloaded



| Name | Type | Description |
|------|------|-------------|
| `pagerView` | [PagerView](/api-docs/clay-web/ceramic/PagerView/) | The PagerView releasing the view  |
| `pageIndex` | [Int](/api-docs/clay-web/Int/) | The index of the page being released  |
| `view` | [View](/api-docs/clay-web/ceramic/View/) | The view to potentially recycle  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if the view can be reused, false to destroy it |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pagerViewPageAtIndex"><div class="plugin-name">ui</div><code><span class="field-name">pagerViewPageAtIndex</span><span class="parenthesis">(</span><span class="arg-name">pagerView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PagerView/" class="type-link">PagerView</a><span class="operator">,</span> <span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">reusableView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">View</a></code><a class="header-anchor" href="#pagerViewPageAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a view at the given index. If `reusableView` is provided,
it can be recycled as the new item to avoid creating new instances.

Implementation tips:
- Always check if reusableView is non-null before creating a new view
- Configure the view with data for the specified pageIndex
- The returned view will be sized to match the PagerView dimensions



| Name | Type | Description |
|------|------|-------------|
| `pagerView` | [PagerView](/api-docs/clay-web/ceramic/PagerView/) | The PagerView requesting the view  |
| `pageIndex` | [Int](/api-docs/clay-web/Int/) | The index of the page to display  |
| `reusableView` | [View](/api-docs/clay-web/ceramic/View/) | Optional recycled view to configure and return  |

| Returns | Description |
|---------|-------------|
| [View](/api-docs/clay-web/ceramic/View/) | A configured View for the specified page index |


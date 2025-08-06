---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: CollectionViewDataSource
target: Headless
permalink: api-docs/headless/ceramic/CollectionViewDataSource/
---

# CollectionViewDataSource

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/CollectionViewDataSource.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionViewDataSource</strong> (Interface) → <a href="/api-docs/headless/elements/ListViewDataSource/">elements.ListViewDataSource</a>, <a href="/api-docs/headless/elements/SelectListView/">elements.SelectListView</a></div>

Interface for providing data to a CollectionView.

The data source is responsible for:
- Reporting the total number of items
- Setting the size/position of each item frame
- Creating and configuring item views
- Managing view recycling

```haxe
class MyDataSource implements CollectionViewDataSource {
    var items:Array<ItemData>;
    public function collectionViewSize(view:CollectionView):Int {
        return items.length;
    }
    public function collectionViewItemFrameAtIndex(view:CollectionView, index:Int, frame:CollectionViewItemFrame):Void {
        // Set item dimensions
        frame.width = 100;
        frame.height = 120;
    }
    public function collectionViewItemAtIndex(view:CollectionView, index:Int, reusableView:View):View {
        // Create or reuse a view
        var itemView = reusableView != null ? cast(reusableView, ItemView) : new ItemView();
        itemView.data = items[index];
        return itemView;
    }
    public function collectionViewReleaseItemAtIndex(view:CollectionView, index:Int, itemView:View):Bool {
        // Clean up and return true to allow reuse
        cast(itemView, ItemView).data = null;
        return true;
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/CollectionView/">CollectionView</a>, <a href="/api-docs/headless/ceramic/CollectionViewItemFrame/">CollectionViewItemFrame</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="collectionViewSize"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewSize</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#collectionViewSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the total number of items in the collection.
This is called whenever the collection view needs to know how many items to display.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/headless/ceramic/CollectionView/) | The collection view requesting the size  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The total number of items |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewItemFrameAtIndex"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewItemFrameAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionViewItemFrame/" class="type-link">CollectionViewItemFrame</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collectionViewItemFrameAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the dimensions for an item at the specified index.
The frame object should be modified with the desired width and height.
Position (x, y) will be calculated by the layout.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/headless/ceramic/CollectionView/) | The collection view displaying the item  |
| `itemIndex` | [Int](/api-docs/headless/Int/) | Zero-based index of the item  |
| `frame` | [CollectionViewItemFrame](/api-docs/headless/ceramic/CollectionViewItemFrame/) | The frame object to configure (modify width and height) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewReleaseItemAtIndex"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewReleaseItemAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collectionViewReleaseItemAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when an item view is about to be recycled or removed.
This allows cleanup of the view before it's reused for a different item.

Common cleanup tasks:
- Remove event listeners
- Cancel animations
- Clear references to prevent memory leaks



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/headless/ceramic/CollectionView/) | The collection view containing the item  |
| `itemIndex` | [Int](/api-docs/headless/Int/) | The index of the item being released  |
| `view` | [View](/api-docs/headless/ceramic/View/) | The view being released  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if the view can be recycled, false to destroy it |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewItemAtIndex"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewItemAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">reusableView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">View</a></code><a class="header-anchor" href="#collectionViewItemAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates or configures a view for the item at the specified index.

If reusableView is provided, it should be reconfigured for the new item
to avoid creating new view instances. This improves performance.

The returned view will be automatically positioned and sized by the
collection view based on the frame data.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/headless/ceramic/CollectionView/) | The collection view requesting the item  |
| `itemIndex` | [Int](/api-docs/headless/Int/) | Zero-based index of the item to display  |
| `reusableView` | [View](/api-docs/headless/ceramic/View/) | An existing view that can be reconfigured, or null  |

| Returns | Description |
|---------|-------------|
| [View](/api-docs/headless/ceramic/View/) | The configured view to display for this item |


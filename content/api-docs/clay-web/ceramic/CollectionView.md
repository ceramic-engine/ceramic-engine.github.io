---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: CollectionView
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/CollectionView/
---

# CollectionView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/CollectionView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">View</a> → <a href="/api-docs/clay-web/ceramic/ScrollView/">ScrollView</a> → <strong>ceramic.CollectionView</strong> (Class) → <a href="/api-docs/clay-web/elements/CellCollectionView/">elements.CellCollectionView</a></div>

A scrollable collection view that efficiently displays large data sets using view recycling.

CollectionView is designed for performance when displaying many items by only creating
views for visible items and recycling them as the user scrolls. It supports both
vertical and horizontal scrolling layouts.

Key features:
- Efficient view recycling for large data sets
- Customizable layouts via CollectionViewLayout
- Automatic item visibility management
- Smooth scrolling to specific items
- Multiple item behavior modes (RECYCLE, FREEZE, LAZY)

```haxe
var collection = new CollectionView();
collection.size(400, 600);

// Set up a flow layout
var layout = new CollectionViewFlowLayout();
layout.itemSize = { width: 100, height: 100 };
layout.spacing = 10;
collection.collectionViewLayout = layout;

// Implement data source
collection.dataSource = new MyCustomCollectionViewDataSource();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/CollectionViewDataSource/">CollectionViewDataSource</a>, <a href="/api-docs/clay-web/ceramic/CollectionViewLayout/">CollectionViewLayout</a>, <a href="/api-docs/clay-web/ceramic/CollectionViewFlowLayout/">CollectionViewFlowLayout</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="collectionViewFlowLayout"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewFlowLayout</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewFlowLayout/" class="type-link">CollectionViewFlowLayout</a></code><a class="header-anchor" href="#collectionViewFlowLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the current layout if it's a CollectionViewFlowLayout.
This provides optimized access to flow layout specific properties.
Will be null if using a different layout type.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collectionViewLayout"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewLayout</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewLayout/" class="type-link">CollectionViewLayout</a></code><a class="header-anchor" href="#collectionViewLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layout object responsible for positioning items in the collection.
Changing the layout will trigger a full relayout of all items.

<div class="see"><strong>See:</strong> CollectionViewFlowLayout for the default grid-based layout</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dataSource"><div class="plugin-name">ui</div><code><span class="field-name">dataSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewDataSource/" class="type-link">CollectionViewDataSource</a></code><a class="header-anchor" href="#dataSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The data source that provides items for the collection view.
Setting a new data source will reload all data and recreate visible items.

The data source must implement:
- collectionViewSize(): Number of items
- collectionViewItemAtIndex(): Create/configure item views
- collectionViewItemFrameAtIndex(): Set item dimensions
- collectionViewReleaseItemAtIndex(): Handle item recycling

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoDestroyItems"><div class="plugin-name">ui</div><code><span class="field-name">autoDestroyItems</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoDestroyItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically destroy item views when they're removed.
Set to false if you want to manage item lifecycle manually.
Default is true for automatic memory management.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxReusableViewsCount"><div class="plugin-name">ui</div><code><span class="field-name">maxReusableViewsCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxReusableViewsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of recycled views to keep in memory.
Higher values can improve scrolling performance but use more memory.
Lower values save memory but may cause more view creation during scrolling.
Default is 1.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="childrenDepth"><div class="plugin-name">ui</div><code><span class="field-name">childrenDepth</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ChildrenDepth/" class="type-link">ChildrenDepth</a></code><a class="header-anchor" href="#childrenDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls how item views are assigned depth values for rendering order.
- INCREMENT: Each item has higher depth (later items on top)
- DECREMENT: Each item has lower depth (earlier items on top)
- SAME: All items at same depth (order by index)
- CUSTOM: Manual depth assignment
Default is SAME.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frames"><div class="plugin-name">ui</div><code><span class="field-name">frames</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/CollectionViewItemFrame/" class="type-link">CollectionViewItemFrame</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only array of frames representing the position and size of each item.
Frames are computed by the layout and used for visibility culling.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemsBehavior"><div class="plugin-name">ui</div><code><span class="field-name">itemsBehavior</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemsBehavior/" class="type-link">CollectionViewItemsBehavior</a></code><a class="header-anchor" href="#itemsBehavior"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines how item views are managed:
- RECYCLE: Reuse views for performance (default)
- FREEZE: Keep all created views active
- LAZY: Create views only when visible

RECYCLE is recommended for large data sets.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">ui</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reloadData"><div class="plugin-name">ui</div><code><span class="field-name">reloadData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reloadData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reloads all data from the data source.
This will:
- Destroy all existing item views
- Query the data source for the new item count
- Create frames for all items
- Trigger a layout update

Call this when your underlying data changes.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findClosestItem"><div class="plugin-name">ui</div><code><span class="field-name">findClosestItem</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">includeScroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findClosestItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the index of the item closest to the given coordinates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | | X coordinate to test  |
| `y` | [Float](/api-docs/clay-web/Float/) | | Y coordinate to test  |
| `includeScroll` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether to account for current scroll position  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Index of the closest item, or -1 if no items |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeVisibleItems"><div class="plugin-name">ui</div><code><span class="field-name">computeVisibleItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeVisibleItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates which items are visible and manages view recycling.
This is called automatically when scrolling or layout changes.

The method will:
- Determine which frames are in the visible area
- Recycle views that moved off-screen
- Create or reuse views for newly visible items
- Position and size all visible views

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTargetScrollXForItem"><div class="plugin-name">ui</div><code><span class="field-name">getTargetScrollXForItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">itemPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemPosition/" class="type-link">CollectionViewItemPosition</a> <span class="operator">=</span> <span class="default-value">CollectionViewItemPosition.ENSURE_VISIBLE</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTargetScrollXForItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the scroll X position needed to show an item at the desired position.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | | Index of the item to scroll to  |
| `itemPosition` | [CollectionViewItemPosition](/api-docs/clay-web/ceramic/CollectionViewItemPosition/) | `CollectionViewItemPosition.ENSURE_VISIBLE` | Where to position the item (START, MIDDLE, END, ENSURE_VISIBLE)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | Target scroll X value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTargetScrollYForItem"><div class="plugin-name">ui</div><code><span class="field-name">getTargetScrollYForItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">itemPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemPosition/" class="type-link">CollectionViewItemPosition</a> <span class="operator">=</span> <span class="default-value">CollectionViewItemPosition.ENSURE_VISIBLE</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTargetScrollYForItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the scroll Y position needed to show an item at the desired position.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | | Index of the item to scroll to  |
| `itemPosition` | [CollectionViewItemPosition](/api-docs/clay-web/ceramic/CollectionViewItemPosition/) | `CollectionViewItemPosition.ENSURE_VISIBLE` | Where to position the item (START, MIDDLE, END, ENSURE_VISIBLE)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | Target scroll Y value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scrollToItem"><div class="plugin-name">ui</div><code><span class="field-name">scrollToItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">itemPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemPosition/" class="type-link">CollectionViewItemPosition</a> <span class="operator">=</span> <span class="default-value">CollectionViewItemPosition.ENSURE_VISIBLE</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollToItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Immediately scrolls to show the specified item.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | | Index of the item to scroll to  |
| `itemPosition` | [CollectionViewItemPosition](/api-docs/clay-web/ceramic/CollectionViewItemPosition/) | `CollectionViewItemPosition.ENSURE_VISIBLE` | Where to position the item: - ENSURE_VISIBLE: Scroll minimum amount to make visible - START: Position at start of view - MIDDLE: Center in view - END: Position at end of view |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="smoothScrollToItem"><div class="plugin-name">ui</div><code><span class="field-name">smoothScrollToItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">itemPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemPosition/" class="type-link">CollectionViewItemPosition</a> <span class="operator">=</span> <span class="default-value">CollectionViewItemPosition.ENSURE_VISIBLE</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.15</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#smoothScrollToItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Smoothly animates scrolling to show the specified item.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | | Index of the item to scroll to  |
| `itemPosition` | [CollectionViewItemPosition](/api-docs/clay-web/ceramic/CollectionViewItemPosition/) | `CollectionViewItemPosition.ENSURE_VISIBLE` | Where to position the item (see scrollToItem)  |
| `duration` | [Float](/api-docs/clay-web/Float/) | `0.15` | Animation duration in seconds (default: 0.15)  |
| `easing` | Anonymous | *(optional)* | Easing function for the animation |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new CollectionView with a default flow layout.

## Private Members

<div class="signature field-var has-description has-plugin" id="reusableViews"><div class="plugin-name">ui</div><code><span class="field-name">reusableViews</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/View/" class="type-link">View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#reusableViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool of recycled views available for reuse.
Managed automatically based on itemsBehavior and maxReusableViewsCount.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="prevLayoutWidth"><div class="plugin-name">ui</div><code><span class="field-name">prevLayoutWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevLayoutWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Previous layout width, used to detect size changes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="prevLayoutHeight"><div class="plugin-name">ui</div><code><span class="field-name">prevLayoutHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevLayoutHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Previous layout height, used to detect size changes.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


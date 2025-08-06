---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ListViewDataSource
target: Clay (Native)
permalink: api-docs/clay-native/elements/ListViewDataSource/
---

# ListViewDataSource

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ListView.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.ListViewDataSource</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/CollectionViewDataSource/">ceramic.CollectionViewDataSource</a></div>

Data source implementation for ListView's collection view.

Handles the interface between ListView and its internal CellCollectionView,
providing item data, managing cell creation and recycling, and binding
cell behavior to list functionality.

<div class="see"><strong>See:</strong> CollectionViewDataSource, <a href="/api-docs/clay-native/elements/ListView/">ListView</a>, <a href="/api-docs/clay-native/elements/CellView/">CellView</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="collectionViewSize"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewSize</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#collectionViewSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of items in the collection.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | The requesting collection view  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The number of items in the ListView's items array |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewItemFrameAtIndex"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewItemFrameAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionViewItemFrame/" class="type-link">ceramic.CollectionViewItemFrame</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collectionViewItemFrameAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures the frame dimensions for an item at the specified index.

Sets the width to fill the collection view (minus scrollbar space if enabled)
and height based on the smallItems setting.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | The requesting collection view  |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) | The index of the item  |
| `frame` | [ceramic.CollectionViewItemFrame](/api-docs/clay-native/ceramic/CollectionViewItemFrame/) | The frame to configure |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewReleaseItemAtIndex"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewReleaseItemAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collectionViewReleaseItemAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when a view is no longer needed at the given index.

Allows cleanup before view reuse. Currently always returns true
to allow cell recycling for optimal performance.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | The requesting collection view  |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) | The index where the view was used  |
| `view` | [ceramic.View](/api-docs/clay-native/ceramic/View/) | The view being released  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if the view can be reused, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewItemAtIndex"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewItemAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">reusableView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#collectionViewItemAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates or recycles a view for the item at the specified index.

If a reusable view is provided, it's recycled and updated with the new
item index. Otherwise, a new CellView is created and fully configured.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | The requesting collection view  |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) | The index of the item to display  |
| `reusableView` | [ceramic.View](/api-docs/clay-native/ceramic/View/) | Optional view to recycle  |

| Returns | Description |
|---------|-------------|
| [ceramic.View](/api-docs/clay-native/ceramic/View/) | A configured CellView for the item |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">listView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ListView/" class="type-link">ListView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new data source for the specified ListView.



| Name | Type | Description |
|------|------|-------------|
| `listView` | [ListView](/api-docs/clay-native/elements/ListView/) | The ListView this data source serves |

## Private Members

<div class="signature field-var has-description has-plugin" id="listView"><div class="plugin-name">elements</div><code><span class="field-name">listView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ListView/" class="type-link">ListView</a></code><a class="header-anchor" href="#listView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the parent ListView

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindCellView"><div class="plugin-name">elements</div><code><span class="field-name">bindCellView</span><span class="parenthesis">(</span><span class="arg-name">cell</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/CellView/" class="type-link">CellView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindCellView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds data and behavior to a CellView.

Sets up automatic data binding, theme updates, click handling,
drag-and-drop behavior, and action handlers (trash, lock, duplicate)
for the cell based on ListView configuration.



| Name | Type | Description |
|------|------|-------------|
| `cell` | [CellView](/api-docs/clay-native/elements/CellView/) | The CellView to bind |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleCellDraggingChange"><div class="plugin-name">elements</div><code><span class="field-name">handleCellDraggingChange</span><span class="parenthesis">(</span><span class="arg-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">wasDragging</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleCellDraggingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles changes in cell dragging state.

Updates the collection view's items behavior to prevent recycling
during drag operations for smoother interaction.



| Name | Type | Description |
|------|------|-------------|
| `dragging` | [Bool](/api-docs/clay-native/Bool/) | Current dragging state  |
| `wasDragging` | [Bool](/api-docs/clay-native/Bool/) | Previous dragging state |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleCellDestroy"><div class="plugin-name">elements</div><code><span class="field-name">handleCellDestroy</span><span class="parenthesis">(</span><span class="arg-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleCellDestroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles cell destruction.

Updates items behavior when a cell is destroyed to ensure
proper state management.



| Name | Type | Description |
|------|------|-------------|
| `destroyed` | [ceramic.Entity](/api-docs/clay-native/ceramic/Entity/) | The destroyed entity |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateItemsBehaviorFromDragging"><div class="plugin-name">elements</div><code><span class="field-name">updateItemsBehaviorFromDragging</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateItemsBehaviorFromDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates collection view behavior based on dragging state.

Switches between LAZY and RECYCLE behaviors:
- LAZY: When any cell is being dragged (prevents recycling)
- RECYCLE: When no cells are being dragged (allows recycling)

This ensures smooth drag interactions while maintaining performance.


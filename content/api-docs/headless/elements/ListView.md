---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ListView
target: Headless
permalink: api-docs/headless/elements/ListView/
---

# ListView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ListView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/headless/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/headless/ceramic/View/">ceramic.View</a> → <strong>elements.ListView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/tracker/Observable/">tracker.Observable</a></div>

A comprehensive list view with sorting, item management, and interaction features.

ListView provides a feature-rich interface for displaying and managing lists of data.
It supports various operations including sorting, item selection, locking/unlocking,
duplication, and deletion. The view uses a CollectionView internally for efficient
scrolling and item recycling.

Features:
- Dynamic item lists with automatic updates
- Sortable items with drag-and-drop reordering
- Item selection with visual feedback
- Lock/unlock functionality for individual items
- Item duplication and deletion operations
- Two item height modes (small and large)
- Scroll control with optional scrollbar
- Theme integration and styling
- Event-driven architecture for item operations
- Integration with WindowItem for window management

Example usage:
```haxe
var items = ["Item 1", "Item 2", "Item 3"];
var listView = new ListView(items);
listView.trashable = true;
listView.sortable = true;
listView.onTrashItem(this, (index) -> {
    items.splice(index, 1);
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/CellCollectionView/">CellCollectionView</a>, <a href="/api-docs/headless/elements/CellView/">CellView</a>, <a href="/api-docs/headless/elements/WindowItem/">WindowItem</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="CELL_HEIGHT_SMALL"><div class="plugin-name">elements</div><code><span class="field-name">CELL_HEIGHT_SMALL</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CELL_HEIGHT_SMALL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard height for small list items (30 pixels)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="CELL_HEIGHT_LARGE"><div class="plugin-name">elements</div><code><span class="field-name">CELL_HEIGHT_LARGE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CELL_HEIGHT_LARGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard height for large list items (39 pixels)

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collectionView"><div class="plugin-name">elements</div><code><span class="field-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/elements/CellCollectionView/" class="type-link">CellCollectionView</a></code><a class="header-anchor" href="#collectionView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The internal collection view that handles item display and scrolling

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dataSource"><div class="plugin-name">elements</div><code><span class="field-name">dataSource</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionViewDataSource/" class="type-link">ceramic.CollectionViewDataSource</a></code><a class="header-anchor" href="#dataSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The data source providing item data to the collection view

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this list view

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="items"><div class="plugin-name">elements</div><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The array of items to display in the list

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="selectedIndex"><div class="plugin-name">elements</div><code><span class="field-name">selectedIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the currently selected item (-1 for no selection)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="trashable"><div class="plugin-name">elements</div><code><span class="field-name">trashable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#trashable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether items can be deleted/trashed

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lockable"><div class="plugin-name">elements</div><code><span class="field-name">lockable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lockable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether items can be locked/unlocked

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duplicable"><div class="plugin-name">elements</div><code><span class="field-name">duplicable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#duplicable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether items can be duplicated

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sortable"><div class="plugin-name">elements</div><code><span class="field-name">sortable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sortable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether items can be reordered via drag and drop

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="smallItems"><div class="plugin-name">elements</div><code><span class="field-name">smallItems</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#smallItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use small item height (30px) instead of large (39px)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scrollEnabled"><div class="plugin-name">elements</div><code><span class="field-name">scrollEnabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scrollEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether scrolling is enabled for the list

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="windowItem"><div class="plugin-name">elements</div><code><span class="field-name">windowItem</span><span class="operator">:</span> <a href="/api-docs/headless/elements/WindowItem/" class="type-link">WindowItem</a></code><a class="header-anchor" href="#windowItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional WindowItem for window-specific list management.
Used for coordinating list operations within a window context.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoCheckLocked"><div class="plugin-name">elements</div><code><span class="field-name">autoCheckLocked</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoCheckLocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically check and update item locked states

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateItems"><div class="plugin-name">elements</div><code><span class="field-name">invalidateItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSelectedIndex"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSelectedIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSelectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTrashable"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTrashable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTrashable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLockable"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLockable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLockable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDuplicable"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDuplicable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDuplicable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSortable"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSortable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSortable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSmallItems"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSmallItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSmallItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateScrollEnabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateScrollEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateScrollEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ListView instance.

Initializes the list view with the provided items array and sets up
the internal collection view, data source, and automatic update handlers.



| Name | Type | Description |
|------|------|-------------|
| `items` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> | The initial array of items to display |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedItems"><div class="plugin-name">elements</div><code><span class="field-name">unobservedItems</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSelectedIndex"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSelectedIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedSelectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTrashable"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTrashable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedTrashable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLockable"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLockable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedLockable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDuplicable"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDuplicable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDuplicable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSortable"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSortable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedSortable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSmallItems"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSmallItems</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedSmallItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedScrollEnabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedScrollEnabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedScrollEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ListView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ListView](/api-docs/headless/elements/ListView/) |
| `fromSerializedField` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMoveItemAboveItem"><div class="plugin-name">elements</div><code><span class="field-name">emitMoveItemAboveItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">otherItemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMoveItemAboveItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an item should be moved above another item in the list

| Name | Type |
|------|------|
| `itemIndex` | [Int](/api-docs/headless/Int/) |
| `otherItemIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMoveItemBelowItem"><div class="plugin-name">elements</div><code><span class="field-name">emitMoveItemBelowItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">otherItemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMoveItemBelowItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an item should be moved below another item in the list

| Name | Type |
|------|------|
| `itemIndex` | [Int](/api-docs/headless/Int/) |
| `otherItemIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTrashItem"><div class="plugin-name">elements</div><code><span class="field-name">emitTrashItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTrashItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an item should be deleted/trashed

| Name | Type |
|------|------|
| `itemIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLockItem"><div class="plugin-name">elements</div><code><span class="field-name">emitLockItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLockItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an item should be locked

| Name | Type |
|------|------|
| `itemIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUnlockItem"><div class="plugin-name">elements</div><code><span class="field-name">emitUnlockItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUnlockItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an item should be unlocked

| Name | Type |
|------|------|
| `itemIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDuplicateItem"><div class="plugin-name">elements</div><code><span class="field-name">emitDuplicateItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDuplicateItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an item should be duplicated

| Name | Type |
|------|------|
| `itemIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/headless/elements/Theme/) |
| `previous` | [Theme](/api-docs/headless/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitItemsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitItemsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitItemsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when items field changes.

| Name | Type |
|------|------|
| `current` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> |
| `previous` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSelectedIndexChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSelectedIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelectedIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when selectedIndex field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/headless/Int/) |
| `previous` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTrashableChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTrashableChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTrashableChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when trashable field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLockableChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLockableChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLockableChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when lockable field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDuplicableChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDuplicableChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDuplicableChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when duplicable field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSortableChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSortableChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSortableChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when sortable field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSmallItemsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSmallItemsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSmallItemsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when smallItems field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitScrollEnabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitScrollEnabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScrollEnabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when scrollEnabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFromScrollEnabled"><div class="plugin-name">elements</div><code><span class="field-name">updateFromScrollEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromScrollEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates scroll behavior based on the scrollEnabled property.

Enables or disables scrolling and scrollbar visibility based on
the current scrollEnabled setting.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFromItems"><div class="plugin-name">elements</div><code><span class="field-name">updateFromItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the collection view when items change.

Reloads the collection view data and ensures proper layout and
scrolling when the items array or related properties change.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Overrides layout to properly size the collection view.

Ensures the collection view matches the size of this ListView.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkLockedIfNeeded"><div class="plugin-name">elements</div><code><span class="field-name">checkLockedIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkLockedIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks item locked states if auto-checking is enabled.

Called every frame to update locked states when autoCheckLocked is true.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | Time elapsed since last frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="didEmitLockItem"><div class="plugin-name">elements</div><code><span class="field-name">didEmitLockItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitLockItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called after a lock item event is emitted.

Triggers a check of all item locked states to update the UI.



| Name | Type | Description |
|------|------|-------------|
| `itemIndex` | [Int](/api-docs/headless/Int/) | The index of the item that was locked |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="didEmitUnlockItem"><div class="plugin-name">elements</div><code><span class="field-name">didEmitUnlockItem</span><span class="parenthesis">(</span><span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitUnlockItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called after an unlock item event is emitted.

Triggers a check of all item locked states to update the UI.



| Name | Type | Description |
|------|------|-------------|
| `itemIndex` | [Int](/api-docs/headless/Int/) | The index of the item that was unlocked |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkLocked"><div class="plugin-name">elements</div><code><span class="field-name">checkLocked</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkLocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks and updates the locked state of all visible items.

Iterates through all visible cell views and updates their locked
state based on the 'locked' property of their corresponding items.
Automatically deselects any item that becomes locked.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | elements.ListViewDataSource |


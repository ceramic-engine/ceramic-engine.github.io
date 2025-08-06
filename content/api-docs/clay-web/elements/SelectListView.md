---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: SelectListView
target: Clay (Web)
permalink: api-docs/clay-web/elements/SelectListView/
---

# SelectListView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/SelectListView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <strong>elements.SelectListView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a>, <a href="/api-docs/clay-web/ceramic/CollectionViewDataSource/">ceramic.CollectionViewDataSource</a></div>

A scrollable list view for displaying selectable items in dropdown controls.

SelectListView provides a virtualized list interface for selecting from a collection
of string options. It supports highlighting the current selection, null value handling,
and automatic scrolling to selected items. The view uses a CollectionView for efficient
rendering of large lists.

Key features:
- Virtualized scrolling for performance with large lists
- Current selection highlighting
- Support for null values with custom display text
- Click and touch interaction
- Automatic scrolling to selected items
- Customizable cell styling through themes

Usage example:
```haxe
var listView = new SelectListView();
listView.list = ['Item 1', 'Item 2', 'Item 3'];
listView.nullValueText = 'None';
listView.value = 'Item 2';
listView.size(200, 150);
listView.onValueChange(this, (value, prev) -> {
    trace('Selected: ' + value);
});
add(listView);
```

## Static Members

<div class="signature field-var has-description has-plugin" id="ITEM_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">ITEM_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ITEM_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of each item in the list in pixels

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this list view. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoScrollToValue"><div class="plugin-name">elements</div><code><span class="field-name">autoScrollToValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoScrollToValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically scroll to the selected value when it changes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="value"><div class="plugin-name">elements</div><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently selected value. Can be null if no value is selected

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="list"><div class="plugin-name">elements</div><code><span class="field-name">list</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#list"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of string options to display in the list

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nullValueText"><div class="plugin-name">elements</div><code><span class="field-name">nullValueText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#nullValueText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text to display for the null/empty value option. If null, no null option is shown

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateList"><div class="plugin-name">elements</div><code><span class="field-name">invalidateList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateNullValueText"><div class="plugin-name">elements</div><code><span class="field-name">invalidateNullValueText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateNullValueText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scrollToValue"><div class="plugin-name">elements</div><code><span class="field-name">scrollToValue</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemPosition/" class="type-link">ceramic.CollectionViewItemPosition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollToValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls the list to show the currently selected value.



| Name | Type | Description |
|------|------|-------------|
| `position` | [ceramic.CollectionViewItemPosition](/api-docs/clay-web/ceramic/CollectionViewItemPosition/) | How to position the item (START, CENTER, END, ENSURE_VISIBLE) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewSize"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewSize</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#collectionViewSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the total number of items in the list.

Includes an extra item if nullValueText is set to represent the null option.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-web/ceramic/CollectionView/) | The collection view requesting the size  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Total number of items including null option if applicable |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewItemFrameAtIndex"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewItemFrameAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionViewItemFrame/" class="type-link">ceramic.CollectionViewItemFrame</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collectionViewItemFrameAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides the frame (size and position) for an item at the given index.

All items have the same height (ITEM_HEIGHT) and fill the collection view width.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-web/ceramic/CollectionView/) | The collection view requesting the frame  |
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | Index of the item  |
| `frame` | [ceramic.CollectionViewItemFrame](/api-docs/clay-web/ceramic/CollectionViewItemFrame/) | Frame object to populate with size information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewReleaseItemAtIndex"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewReleaseItemAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collectionViewReleaseItemAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when a view is no longer needed at the given index.

Allows cleanup before view reuse. For SelectListView, cells can always be reused.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-web/ceramic/CollectionView/) | The collection view releasing the item  |
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | Index of the item being released  |
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) | The view being released  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if the view can be reused, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewItemAtIndex"><div class="plugin-name">elements</div><code><span class="field-name">collectionViewItemAtIndex</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/CollectionView/" class="type-link">ceramic.CollectionView</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">reusableView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#collectionViewItemAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates or reuses a view for the item at the given index.

Creates CellView instances to display list items. Reuses existing views when
possible for performance. Binds cell data and interaction handlers.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [ceramic.CollectionView](/api-docs/clay-web/ceramic/CollectionView/) | The collection view requesting the item  |
| `itemIndex` | [Int](/api-docs/clay-web/Int/) | Index of the item  |
| `reusableView` | [ceramic.View](/api-docs/clay-web/ceramic/View/) | Existing view that can be recycled, if available  |

| Returns | Description |
|---------|-------------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) | The view to display for this item |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SelectListView.

Sets up the collection view for virtualized scrolling, configures data binding,
and initializes automatic scrolling behavior.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedList"><div class="plugin-name">elements</div><code><span class="field-name">unobservedList</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedNullValueText"><div class="plugin-name">elements</div><code><span class="field-name">unobservedNullValueText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedNullValueText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collectionView"><div class="plugin-name">elements</div><code><span class="field-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/CellCollectionView/" class="type-link">CellCollectionView</a></code><a class="header-anchor" href="#collectionView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The collection view that handles virtualized scrolling and cell management

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">SelectListView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [SelectListView](/api-docs/clay-web/elements/SelectListView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-web/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-web/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitValueClick"><div class="plugin-name">elements</div><code><span class="field-name">emitValueClick</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitValueClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when a value is clicked/selected

| Name | Type |
|------|------|
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when value field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitListChange"><div class="plugin-name">elements</div><code><span class="field-name">emitListChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitListChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when list field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/)<[String](/api-docs/clay-web/String/)> |
| `previous` | [ceramic.ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitNullValueTextChange"><div class="plugin-name">elements</div><code><span class="field-name">emitNullValueTextChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNullValueTextChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when nullValueText field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateScrollFromValueIfNeeded"><div class="plugin-name">elements</div><code><span class="field-name">updateScrollFromValueIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateScrollFromValueIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates scroll position to show the current value if auto-scrolling is enabled.

This is called automatically when the value changes and autoScrollToValue is true.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindCellView"><div class="plugin-name">elements</div><code><span class="field-name">bindCellView</span><span class="parenthesis">(</span><span class="arg-name">cell</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/CellView/" class="type-link">CellView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindCellView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds data and interaction handlers to a cell view.

Sets up automatic updates for cell content, selection state, and theme,
and configures click handling for value selection.



| Name | Type | Description |
|------|------|-------------|
| `cell` | [CellView](/api-docs/clay-web/elements/CellView/) | The cell view to bind |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of the list view based on the current theme.

Sets the background color, border appearance, and other visual properties
to match the current theme.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

